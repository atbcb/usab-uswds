require 'fileutils'

module AssetHelper
    def self.process(site, payload)
        return if @processed
        def self.cp_safe(src, dest)
            if Dir.exist?(src)
                FileUtils.mkdir_p(dest) unless Dir.exist?(dest)
                begin
                    FileUtils.cp_r(src, dest, verbose: true)
                rescue Errno::ENOENT => e
                    puts "AssetHelper: copy failed #{src} -> #{dest}: #{e.class}: #{e.message}"
                end
            else
                puts "AssetHelper: source #{src} not found; skipping"
            end
        end

        cp_safe('node_modules/uswds/dist/js/', 'assets/')
        cp_safe('node_modules/uswds/dist/img/', 'assets/uswds/')
        cp_safe('node_modules/uswds/dist/fonts/', 'assets/uswds/')
        cp_safe('node_modules/netlify-cms/dist/', 'assets/netlify-cms/')
        cp_safe('node_modules/jquery/dist/', 'assets/jquery/')
        cp_safe('node_modules/swiper/', 'assets/swiper/')
        cp_safe('node_modules/video.js/dist/', 'assets/video-js/')
        cp_safe('node_modules/stickyfilljs/dist/', 'assets/stickyfilljs/')
        cp_safe('node_modules/videojs-youtube/dist/', 'assets/youtube-video-js/')
        cp_safe('node_modules/@fortawesome/fontawesome-free/', 'assets/fontawesome-free/')
        cp_safe('node_modules/jquery-toast-plugin/dist/', 'assets/jquery-toast-plugin/')
        cp_safe('node_modules/dompurify/dist/', 'assets/dompurify/')
        @processed = true
    end
end
  
Jekyll::Hooks.register :site, :after_reset do |site, payload|
    AssetHelper.process(site, payload)
end