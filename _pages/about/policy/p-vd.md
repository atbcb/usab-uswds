---
title: Vulnerability Disclosure Policy
layout: page
toc: sidenav.html
banner-title: About the U.S. Access Board
permalink: /about/policy/vd.html
---

# {{ page.title }}

## Introduction

The U.S. Access Board (USAB) is committed to ensuring the maintenance and security of our systems and protecting confidential information from unauthorized users.
This Vulnerability Disclosure Policy (VDP) is intended to give USAB security researchers clear guidelines for conducting vulnerability discovery activities and
to convey our Agency's preference to submit discovered vulnerabilities to CISA.

This policy describes what systems and types of research are covered under this policy, how to send CISA vulnerability reports, and how long we ask USAB security
researchers to wait before publicly disclosing vulnerabilities. CISA encourages USAB security researchers to contact them to report potential vulnerabilities in their systems.

## Authorization

**If you make a good faith effort to comply with this policy during your security research, we will consider your research to be authorized, and we will work with you to understand and resolve the issue quickly.  In addition, we will not recommend or pursue legal action related to your research.**

## Guidelines

Under this policy, "research" means activities in which you:

- Notify CISA soon as possible after you discover a real or potential security issue.
- Make every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction or manipulation of data.
- Only use exploits to the extent necessary to confirm a vulnerability's presence.  Do not use an exploit to compromise or exfiltrate data, establish persistent command line access, or use the exploit to pivot to other systems.
- Provide us a reasonable amount of time to resolve the issue before you disclose it publicly.
- Do not submit a high volume of low-quality reports.

Once you have established that a vulnerability exists or encounter any sensitive data (including personally identifiable information, financial information,
or proprietary information or trade secrets of any party), **you must stop your test, notify CISA immediately, and not disclose this data to anyone else**.

## Test Methods

The following test methods are not authorized:

- Network denial of service (DoS or DDoS) tests or other tests that impair access to or damage a system or data.
- Physical testing (e.g., office access, open doors, tailgating), social engineering (e.g., phishing, vishing), or any other non-technical vulnerability testing.
- Sending unsolicited electronic mail to USAB users, such as "phishing" messages.
- Testing third-party applications, websites, or services that integrate with or link to or from USAB systems.
- Deleting, tampering, sharing, retaining, or destroying USAB data.
- Using an exploit to exfiltrate data, establish command line access, establish a persistent presence on USAB systems, or "pivot" to other USAB systems.

The following test methods are authorized:

- Ceasing testing and notifying us immediately upon discovery of a vulnerability.
- Cease testing and notifying us immediately upon discovery of an exposure of nonpublic data.
- Purging any storing USAB nonpublic data upon reporting a vulnerability.

## Scope

The following systems/services are in scope:

- access-board.gov

Before adding a system or service to the scope, ensure you are permitted to authorize security testing on the system or service.
Specifically, if you, e.g., use a managed service provider or software as a service, confirm whether the vendor has explicitly authorized such testing,
such as in your agency's contract with the provider or their publicly available policy
If not, you should work with the vendor to obtain authorization.
**If it is not possible to obtain the vendor's authorization, you may not include those systems or services in scope of this policy.**

**Any service not expressly listed above, such as any connected services, are excluded from scope** and are not authorized for testing.
Additionally, vulnerabilities found in systems from our vendors fall outside of this policy's scope and should be reported directly to
the vendor according to their disclosure policy (if any).
If you are not sure whether a system is in scope or not, contact us at <security@access-board.gov> before starting your research (or at
the security contact for the system's domain name listed in the [.gov WHOIS](https://domains.dotgov.gov/dotgov-web/registration/whois.xhtml)).

## Reporting a Vulnerability

Vulnerability reports are accepted via electronic mail at <itsupport@access-board.gov>.
The reports should provide the information USAB needs to find and analyze the vulnerability, such as its description, severity level, potential impact, DNS names of hosts affected, patch links, etc. The reports must be sent as a request to open a ticket for the vulnerability findings. Reports may include proof-of-concept code that demonstrates exploitation of the vulnerability.

We may contact vulnerability analysts to clarify reported vulnerability information or other technical interchange.

USAB pledges to be as transparent as possible about what step we are taking during the remediation process, as well as set expectations for when the report can anticipate acknowledgment of their report.

## Disclosure

The USAB is committed to timely correction of vulnerabilities.
However, we recognize that public disclosure of a vulnerability in absence of a readily available corrective action likely increases versus decreases risk.
Accordingly, we require that you refrain from sharing information about discovered vulnerabilities for 90 calendar days after you have received our
acknowledgement of receipt of your report.
If you believe others should be informed of the vulnerability prior to our implementation of corrective actions, we require that you coordinate in advance with us.

## Document Change History

| Version | Date              | Description |
| !--     | !--               | !--         |
| 1.0     | February 18, 2021 | First issuance. |
| 1.0.1   | February 17, 2023 | Update url.     |
{: .usa-table}
