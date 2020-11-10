---
title: Developing Accessible Software Tutorial 
layout: page
sidenav: false
permalink: /ict/guide/software_tutorial.html
---

# {{ page.title }}

**Creating An Accessible Program, SFCalculator**

This tutorial illustrates the application of the Section 508, 36 CFR 1194.21, requirements for Software Applications and Operating Systems, Technical Provisions (a)-(l). A program for a six-function calculator is developed, named *SFCalculator*. The accessibility requirements of 1194.21 are illustrated during the development of *SFCalculator***.**

SFCalculator is created using Visual Basic 6 Professional (VB6Pro), a very popular language and development tool. VB6Pro was selected because it is so widely used, and because, while it is a powerful tool, it is relatively easy to understand and use.

A copy of VB6 is required to create and manipulate the program examples.

**Creating the Graphical User Interface (GUI)**

The first step is to create the user interface for the calculator. The following process creates the GUI interface:

1.  The input/output fields are created.
2.  The command buttons are created.
3.  A menu is created.
4.  The program is compiled and checked.

**Creating the Input/Output Fields**

1.  Enter the VB6 Integrated Development Environment (IDE), and select 'Standard EXE.' Enter the properties Window, and change the following properties of the Form:

    **Name = sfnCalculator\
    Caption = SFCalculator\
    Height = 3885\
    Left = 105\
    Top = 105\
    Width = 6000**

2.  Next, add fourteen controls to sfnCalculator and set their properties.

3.  From the IDE Control ToolBox, select a Label, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the Label:

    **Name = lblEntry1\
    Caption = Entry &1\
    Left = 360\
    Top = 360\
    UseMnemonic = True**

4.  From the Control ToolBox, select a TextBox, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the TextBox:

    **Name = txtEntry1\
    Left = 1680\
    MaxLength = 7\
    Text = 0\
    ToolTipText = Please enter your first number.\
    Top = 360**

5.  From the Control ToolBox, select a second Label, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the second Label:

    **Name = lblEntry2\
    Caption = Entry &2\
    Left = 3000\
    Top = 360\
    UseMnemonic = True**

6.  From the Control ToolBox, select a second TextBox, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the second TextBox:

    **Name = txtEntry2\
    Left = 4320\
    MaxLength = 7\
    Text = 0\
    ToolTipText = Please enter your second number.\
    Top = 360**

7.  From the Control ToolBox, select a third Label, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the third Label:

    **Name = lblResult\
    Caption = R&esult\
    Left = 3000\
    Top = 1560\
    UseMnemonic = True**

8.  From the Control ToolBox, select a third TextBox, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the third TextBox:

    **Name = txtResult\
    Left = 4320\
    Locked = True\
    Text = 0\
    ToolTipText = This field displays the calculated result.\
    Top = 1560**

The two input fields, result field and their respective field labels have been created for SFCalculator.

**Creating the Command Buttons**

The next step is to create the eight buttons on sfnCalculator that will represent SFCalculator's eight commands or functions. (Only six of the functions involve calculations. The other two pertain to clearing the fields and exiting the program, respectively.)

The following step will create the eight buttons for the calculator

1.  From the Control ToolBox, select a CommandButton, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the CommandButton:

    **Name = cmdAdd\
    Caption = &Add\
    Left = 240\
    ToolTipText = Adds Entry 1 and Entry 2 when activated.\
    Top = 1200**

2.  From the Control ToolBox, select a second CommandButton, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the second CommandButton:

    **Name = cmdSubtract\
    Caption = &Subtract\
    Left = 1560\
    ToolTipText = Subtracts Entry 2 from Entry 1 when activated.\
    Top = 1200**

3.  From the Control ToolBox, select a third CommandButton, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the third CommandButton:

    **Name = cmdMultiply\
    Caption = &Multiply\
    Left = 240\
    ToolTipText = Multiplies Entry 1 and Entry 2 when activated.\
    Top = 1800**

4.  From the Control ToolBox, select a forth CommandButton, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the forth CommandButton:

    **Name = cmdDivide\
    Caption = &Divide\
    Left = 1560\
    ToolTipText = Divides Entry 1 by Entry 2 when activated.\
    Top = 1800**

5.  From the Control ToolBox, select a fifth CommandButton, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the fifth CommandButton:

    **Name = cmdRandomize\
    Caption = &Randomize\
    Left = 240\
    ToolTipText = Generates two random numbers and assigns them to Entry 1 and Entry 2, respectively, when activated.\
    Top = 2400**

6.  From the Control ToolBox, select a sixth CommandButton, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the sixth CommandButton:

    **Name = cmdSquareRoot\
    Caption = S&quareRoot\
    Left = 1560ToolTipText = SquareRoots Entry 1.\
    Top = 2400**

7.  From the Control ToolBox, select a seventh CommandButton, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the seventh CommandButton:

    **Name = cmdClear\
    Caption = &Clear\
    Left = 3000\
    ToolTipText = Clears Entry 1, Entry 2, and Result.\
    Top = 2400**

8.  From the Control ToolBox, select an eighth CommandButton, and place it on sfnCalculator. Enter the properties Window, and change the following properties of the eighth CommandButton:

    **Name = cmdExit\
    Caption = E&xit\
    Left = 4320\
    ToolTipText = Exits SFCalculator when activated.\
    Top = 2400**

**Creating the Menu**

Next, use the Menu Editor to add a single Pull Down Menu that includes as its Menu Options all eight program commands or functions. This will later allow the creation of the CommandButton versions.

1.  Assign the following properties to the PullDownMenu:

    **Caption = F&unctions\
    Name = mnuFunctions**

2.  To mnuFunctions, add the firstMenuOption, the add function, and assign it the following properties:

    **Caption = &Add\
    Name = mnuAdd**

3.  Please be sure to use 'ALT-R' to designate mnuAdd as a MenuOption of mnuFunctions rather than as another PullDownMenu.

4.  Follow similar steps to create the remaining seven MenuOptions of mnuFunctions:

    1.  &Subtract/mnuSubtract,

    2.  &Multiply/mnuMultiply,

    3.  &Divide/mnuDivide,

    4.  &Randomize/mnuRandomize,

    5.  S&quareRoot/mnuSquareRoot,

    6.  &Clear/mnuClear,

    7.  E&xit/mnuExit.

5.  Save the program and compile it.

6.  Run SFCalculator and check its function.

Provided no errors were made, a fully navigable GUI has been created. The Tab key can be used to move among the three TextBoxes and the eight CommandButtons. The Arrow keys allow movement up or down through the eight MenuOptions of the Functions PullDownMenu.

**Code Behind the GUI**

Now, enter the following code, recompile, and then run SFCalculator.

**Code for SFCalculator**

The following is the program code and some comments for the Six-Function Calculator, *SFCalculator*.

> 'Declare global variables.\
> Dim varNumber1, varNumber2, varResult As Variant\
> Dim strMsg As String
>
> 'Execute the Menu-Option version of the Add function if and when the user activates it, summing Entry #1 and Entry #2.\
> Private Sub mnuAdd_Click()\
> varResult = varNumber1 + varNumber2\
> txtResult = varResult\
> txtResult.SetFocus\
> End Sub
>
> 'Execute the Command-Button version of the Add function if and when the user activates it, summing Entry #1 and Entry #2.\
> Private Sub cmdAdd_Click()\
> varResult = varNumber1 + varNumber2\
> txtResult = varResult\
> End Sub
>
> 'Execute the Menu-Option version of the Subtract function if and when the user activates it, subtracting Entry #2 from Entry #1.\
> Private Sub mnuSubtract_Click()\
> varResult = varNumber1 - varNumber2\
> txtResult = varResult\
> txtResult.SetFocus\
> End Sub
>
> 'Execute the Command-Button version of the Subtract function if and when the user activates it, subtracting Entry #2 from Entry #1.\
> Private Sub cmdSubtract_Click()\
> varResult = varNumber1 - varNumber2\
> txtResult = varResult\
> End Sub
>
> Private Sub mnuMultiply_click()\
> varResult = varNumber1 * varNumber2\
> txtResult = varResult\
> txtResult.SetFocus\
> End Sub
>
> Private Sub cmdMultiply_click()\
> varResult = varNumber1 * varNumber2\
> txtResult = varResult\
> End Sub
>
> 'Divide Entry #1 by Entry #2.\
> Private Sub mnuDivide_click()\
> If varNumber2 = 0 Then\
> strMsg = MsgBox("Please do not try to divide by zero!")\
> txtEntry2.SetFocus\
> Exit Sub 'Error trapping\
> End If
>
> varResult = varNumber1 / varNumber2\
> txtResult = varResult\
> txtResult.SetFocus\
> End Sub
>
> Private Sub cmdDivide_click()\
> If varNumber2 = 0 Then\
> strMsg = MsgBox("Please do not try to divide by zero!")\
> txtEntry2.SetFocus\
> Exit Sub\
> End If\
> varResult = varNumber1 / varNumber2\
> txtResult = varResult\
> End Sub
>
> 'Execute the Menu-Option version of Randomize when and if the user activates it, thereby generating two large random numbers and assigning them to Entry #1 and Entry #2.\
> Private Sub mnuRandomize_click()\
> Randomize\
> varNumber1 = Int(Rnd(9999999) * 1000000) + 1\
> varNumber2 = Int(Rnd(9999999) * 1000000) + 1\
> txtEntry1 = varNumber1\
> txtEntry2 = varNumber2\
> End Sub
>
> 'Execute the Command-Button version of Randomize when and if the user activates it, thereby generating two large random numbers and assigning them to Entry #1 and Entry #2.\
> Private Sub cmdRandomize_click()\
> Randomize\
> varNumber1 = Int(Rnd(9999999) * 1000000) + 1\
> varNumber2 = Int(Rnd(9999999) * 1000000) + 1\
> txtEntry1 = varNumber1\
> txtEntry2 = varNumber2\
> End Sub
>
> 'Execute the Menu-Option version of the SquareRoot function when and if the user activates it, producing the square root of Entry #1 only.\
> Private Sub mnuSquareRoot_Click()\
> varResult = Sqr(varNumber1)\
> txtResult = varResult\
> txtResult.SetFocus\
> End Sub
>
> 'Execute the Command-Button version of the SquareRoot function when and if the user activates it, producing the square root of Entry #1 only.\
> Private Sub cmdSquareRoot_Click()\
> varResult = Sqr(varNumber1)\
> txtResult = varResult\
> End Sub
>
> 'Execute the Menu-Option version of the Clear function when and if the user activates it, thereby reinitializing the variables and the three TextBoxes.\
> Private Sub mnuClear_Click()\
> varNumber1 = 0\
> varNumber2 = 0\
> varResult = 0\
> txtEntry1 = 0\
> txtEntry2 = 0\
> txtResult = 0\
> End Sub
>
> 'Execute the Command-Button version of the Clear function when and if the user activates it, thereby reinitializing the variables and the three TextBoxes.\
> Private Sub cmdClear_Click()\
> varNumber1 = 0\
> varNumber2 = 0\
> varResult = 0\
> txtEntry1 = 0\
> txtEntry2 = 0\
> txtResult = 0\
> End Sub
>
> 'Execute the Menu-Option version of the Exit function when and if the user activates it, thereby exiting the program.\
> Private Sub mnuExit_Click()\
> varNumber1 = 0\
> varNumber2 = 0\
> Unload Me\
> End Sub
>
> 'Execute the Command-Button version of the Exit function when and if the user activates it, thereby exiting the program.\
> Private Sub cmdExit_Click()\
> varNumber1 = 0\
> varNumber2 = 0\
> Unload Me\
> End Sub
>
> 'Validate that Entry #1 is numeric. If it is not, then warn the user, and return input focus to Entry #1.\
> Private Sub txtEntry1_lostfocus()\
> If IsNumeric(txtEntry1.Text) = False Then\
> strMsg = MsgBox("Please enter your first number.")\
> txtEntry1.SetFocus\
> End If\
> varNumber1 = Val(txtEntry1.Text)\
> End Sub
>
> 'Validate that Entry #2 is numeric. If it is not, then warn the user, and return input focus to Entry #2.\
> Private Sub txtEntry2_lostfocus()\
> If IsNumeric(txtEntry2.Text) = False Then\
> strMsg = MsgBox("Please enter your second number.")\
> txtEntry2.Refresh\
> txtEntry2.SetFocus\
> End If\
> varNumber2 = Val(txtEntry2)\
> End Sub
>
> 'Upon loading the SFCalculator, initialize variables.\
> Private Sub sfnCalculator_load()\
> varNumber1 = 0\
> varNumber2 = 0\
> varResult = 0\
> End Sub

Check for entry errors, recompile and run *SFCalculator*.

The *SFCalculator* program is now ready to use as an example of how to implement the software accessibility guidelines.

* * * * *

**Exploring the Accessibility of SFCalculator**

The SFCalculator has been developed to demonstrate the application of the Section 508 provisions, specifically the Software Applications and Operating Systems provisions, 36 CFR 1194.21(a)-(l). The following discussion identifies how the various provisions apply and have been implemented in the SFCalculator program.

**§1194.21 Provisions**

| Section 508 Rule\
§1194.21 Software Applications and Operating Systems |
| Keyboard Access | **§1194.21(a)** | When software is designed to run on a system that has a keyboard, product functions shall be executable from a keyboard where the function itself or the result of performing a function can be discerned textually. |
| Accessibility Features | **§1194.21(b)** | Applications shall not disrupt or disable activated features of other products that are identified as accessibility features, where those features are developed and documented according to industry standards. Applications also shall not disrupt or disable activated features of any operating system that are identified as accessibility features where the application programming interface for those accessibility features has been documented by the manufacturer of the operating system and is available to the product developer. |
| Input Focus | **§1194.21(c)** | A well defined on-screen indication of the current focus shall be provided that moves among interactive interface elements as the input focus changes. The focus shall be programmatically exposed so that assistive technology can track focus and focus changes. |
| Object Information | **§1194.21(d)** | Sufficient information about a user interface element including the identity, operation and state of the element shall be available to assistive technology. When an image represents a program element, the information conveyed by the image must also be available in text. |
| Bitmap Images | **§1194.21(e)** | When bitmap images are used to identify controls, status indicators, or other programmatic elements, the meaning assigned to those images shall be consistent throughout an application's performance. |
| Text Information | **§1194.21(f)** | Textual information shall be provided through operating system functions for displaying text. The minimum information that shall be made available is text content, text input caret location, and text attributes. |
| User Selected Attributes | **§1194.21(g)** | Applications shall not override user-selected contrast and color selections and other individual display attributes. |
| Animation | **§1194.21(h)** | When animation is displayed, the information shall be displayable in at least one non-animated presentation mode at the option of the user. |
| Color Coding | **§1194.21(i)** | Color-coding shall not be used as the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. |
| Color and Contrast | **§1194.21(j)** | When a product permits a user to adjust color and contrast settings, a variety of color selections capable of producing a range of contrast levels shall be provided. |
| Flicker Rate | **§1194.21(k)** | Software shall not use flashing or blinking text, objects, or other elements having a flash or blink frequency greater than 2 Hz and lower than 55 Hz. |
| Electronic Forms | **§1194.21(l)** | When electronic forms are used, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues. |

**Application of the 1194.21 Provisions**

**Keyboard Access & Object Information, §1194.21(a) & (d)**

The first Technical Provision, 1194.21(a) applies to providing keyboard functionality to programs.

**Keyboard Access:**

(a) When software is designed to run on a system that has a keyboard, product functions shall be executable from a keyboard where the function itself or the result of performing a function can be discerned textually.

When developing software to run on PCs, at least one alternative keyboard method for any function must be available, if that function or its result can be identified with text, (e.g., a screen reader or speech-recognition system). Note that (a) has Technical Provision (d) as a prerequisite:

#### Object Information:

(d) Sufficient information about a user interface element including the identity, operation and state of the element shall be available to assistive technology. When an image represents a program element, the information conveyed by the image must also be available in text.

However, using the keyboard to execute commands without knowing what those commands are would be pointless; hence, the importance of (d). Therefore the discussion of provision (d) is included in the context of (a) in this section.

In exploring *SFCalculator*, three alternative keyboard methods of executing the various functions will be demonstrated, as well as two methods of obtaining the results. To be sure, none of the keyboard methods preclude using the mouse to operate *SFCalculator*.

While exploring the remainder of this keyboard example, only the keyboard and not the mouse should be used. In addition, if available, using a screen reader will increase the benefit of the example.

#### Tabbing

One keyboard method used is tabbing. Tab around from Entry 1 until the highlight returns to Entry 1. Along the way, reverse direction by pressing 'Shift-Tab,' and then resume the forward direction to Entry 1. (Note that the Enter key must be pressed to execute the selected function.)

For purposes of this discussion, there are two points to note. First, there is a definitive keyboard means of accessing and executing the program functions, at least those on the form, and also accessing the results. Second, as when moving from control to control, if a screen reader was used, the screen reader identified each control with a unique text label, and the result of any function executed was available via text. As mentioned above, the first and second conditions are related; keyboard access to *SFCalculator* functions wouldn't make sense without knowing what those functions were. Meeting these two conditions complies with requirements (a) and (d).

So, what in the development of *SFCalculator* enabled these accessibility features? First, the Common Control Components, that VB provided, were used. A benefit of these programming components is that important information about them is available to the OS via the Windows Application Program Interface (Win32API), and, in turn, that information is available to assistive technology (e.g., screen readers or speech-recognitions systems). In other words, accessibility features, or the potential for them, are intrinsic to these components. (If certain properties of controls are not set or defaulted to particular values, then some accessibility features are not effective.) Second, in order to use the keyboard method of tabbing, the TabStop property must be set to True, thereby informing the OS and, in turn, the assistive technology, that the given control can be tabbed to. The _Click event informs the OS that the given control can be activated via clicking the mouse or pressing the Enter key. Third, each control that was tabbed to is uniquely identified because it was given a unique text value to its Caption property. The Command Buttons and the Menu Options had associated Labels to the three Text Boxes and set unique text values to their Caption properties.

To illustrate the power of TabStop and a violation of (a), set TabStop to False for txtEntry1. (There wouldn't be a violation if there were at least one enabled keyboard method of accessing and using Entry 1.) Recompile and run SFCalculator. Now notice that Entry 1 or txtEntry1 cannot be tabbed to. (For that matter, it cannot be accessed via its AccessKey, 'ALT-1.' See the second keyboard method below. However, the Access Keys for the Command Buttons do work even when TabStop is disabled.) One can, however, access Entry 1 via clicking the mouse over the edit area.

Now, set TabStop to False for the remaining Text Boxes and Command Buttons. Recompile and run SFCalculator. Navigation by tabbing is now disabled. Since keyboard access and use of any of the three Text Boxes is not possible, *SFCalculator* violates Technical Provision (a) and thus Section 508. Before continuing, be sure to return TabStop to True for every control.

Temporarily remove the text from Caption for cmdAdd, lblEntry1, lbl, Entry2, and lblResult. By doing so, Technical Provisions (d) and (a) are violated. Tabbing is possible from Text Box to Text Box to the Add Command button and it is even possible to execute the Add function by pressing Enter. The lack of text identifiers for these controls renders keyboard access to and use of these elements difficult and incomplete. Without trial and error, the proper functions of the unidentified Text Boxes and the Command Button are not known. Before continuing, reenter the text values for cmdAdd, lblEntry1, lblEntry2, and lblResult.

#### AccessKeys

A second keyboard method uses Access Keys. Navigate the entire form with Access Keys, instead of tabbing. Press the following keystrokes with a few seconds break between each execution (ALT-x may be omitted to avoid exiting *SFCalculator*):

> | **KEYSTROKES** | **ACCESS WHAT PROGRAM COMMAND OR FUNCTION** |
> | ALT-2 | Entry 2 input field/Text Box |
> | ALT-e | Result read-only field/Text Box |
> | ALT-a | Add Command Button |
> | ALT-s | Subtract Command Button |
> | ALT-m | Multiply Command Button |
> | ALT-d | Divide Command Button |
> | ALT-r | Randomize Command Button |
> | ALT-q | Square Root Command Button |
> | ALT-c | Clear Command Button |
> | ALT-x | SKIPPING Exit Command Button |
> | ALT-1 | Entry 1 input field/Text Box |

Thus, a second keyboard alternative to a mouse exists!

For purposes of this discussion, there are two points to note. First, there is a second definitive and quick keyboard means of accessing and executing any of the program functions and accessing the results. Second, each program function was accessed or executed. For those running a screen reader, the screen reader identified each control with a unique text label, and the result of any function executed was available via text. Meeting these conditions complies with requirements (a) and (d) as well.

So, what in development of *SFCalculator* enabled these accessibility features? In addition to using Common Control Components and assigning unique text identifiers to each control (as described above), the Access Keys were created by including in each Caption '&' immediately prior to the designated Access Key. For instance, the Caption for cmdAdd reads '&Add,' thus designating 'ALT-A' as the Access Key to the Add Command Button.

Remove the '&' from Caption for all eight Command Buttons and recompile. Run SFCalculator. The Access Keys for the Command Buttons do not work. It is possible, however, to tab to each command and press Enter to activate a given function. If tabbing and no other keyboard method were available, disabling the Access Keys would definitely violate (a) and Section 508. Before continuing, reinsert the '&' for each Caption of the Command Buttons.

#### PullDownMenus, MenuOptions, and HotKeys

A third keyboard method is provided using the Functions Pull Down Menu to select and activate any one of the program commands. Explore the Functions Pull Down Menu and its Menu Options. Use the ALT key to access the Menu Bar and the Up and Down Arrow keys to pull down the Functions menu and to move up and down through the various Menu Options. (Using the ALT-U keys is somewhat quicker for activating the Functions Pull Down Menu than using the ALT key and then Enter or Down Arrow. Likewise, from the activated Functions Pull Down Menu, using the various Hot Keys, such as 'a' for Add or 'c' for Clear, might be quicker than arrowing to the desired option and pressing Enter.) Use the ESC key to escape from or cancel the menu.

Execute the arrow down from the Add option to the Exit option. By executing the down arrow once more, Add option is selected, again. Executing an arrow up selects the Exit option a second time.

#### Hotkey Navigation

Another navigation method is through the use of Hotkeys. From Function, press 'r' to generate two large random numbers. Return to Function, and press 'q' to produce the square root of the random number in Entry 1.

There are two points to note here. First, there is a third method of keyboard use for accessing and executing program functions and results. Second, arrowing from Menu Option to Menu Option, while running a screen reader, verbally identifies each control with a unique text label, and the result of any function executed was available via text. Not surprisingly, meeting these conditions complies with requirements 1194.21(a) and (d).

What in the development of *SFCalculator* enabled these accessibility features? Besides the steps described above, the Menu Editor was used to create mnuFunctions, the Functions Pull Down Menu, and its Menu Options (e.g., mnuAdd). The Caption property of mnuFunctions and mnuAdd et al. was given unique text values, including using '&' in the Caption property to designate a unique mnemonic for quick activation of the given Menu Option.

Were the '&' removed from Caption for each Menu Option, the Functions could still be used, moving up or down and pressing Enter on the selected Menu Option. However, ability to press 'c' to activate the Clear command or 's' to execute the Subtract function, would be disabled.

#### Choice of Keyboard Methods

So, which keyboard method is preferred? In general, providing all three methods gives applications the most flexibility for a variety of users. Some keyboard users prefer to tab. Some rely on Access Keys for the fastest response. Others are used to using menus. Some users prefer a combination of methods. Users of speech recognition and users of the mouse could benefit as well, since they could choose, among the three paths mentioned, their preferred way of accessing the user interface via their respective input devices, instead of the keyboard. Many Windows applications exhibit this kind of flexibility (e.g., Microsoft Office Products).

#### Image Identification

Keyboard access to and text identification of application functions and their results are not the only requirements of Section 508 and not the only accessibility features present in *SFCalculator*. Before turning to an exploration and discussion of some more requirements, notice the second part of Technical Provision (d), namely,

> *When an image represents a program element, the information conveyed by the image must also be available in text.*

To make the second requirement in (d) applicable to *SFCalculator*, modify two properties of cmdClear:

> Picture = PathName\PictureName\
> Style = 1-Graphic

PathName is a placeholder for the name of the drive and path where PictureName is located, and PictureName is a placeholder for the name of the imaged file being used. If Style is left to its default, then the image will not become visible during runtime. For this image, use a .gif named 'Clear.gif' -- presumably, some bitmap/drawing of 'Clear.' (A .bmp image may just as well be used.)

Recompile and run *SFCalculator*. The identity of the Clear Command Button is visually evident and available to users of assistive technology. Actually, cmdClear's identity is visually evident for two reasons (or, it should be): The Clear GIF graphically identifies cmdClear, and the value of Caption identifies cmdClear with text. If a screen reader is used, tabbing to cmdClear will read the text, it shouldn't sound any differently than it did before loading the image. The Caption value of 'Clear' not only identifies cmdClear with text, but it also identifies the image with text that is available to assistive technology. If the text is removed from Caption, then the Clear Command Button would still be visually identified by the Clear image from the Picture property, but it wouldn't be identified textually nor via many assistive technologies. Tabbing to cmdClear, again, using a screen reader, the best result would be the identification of 'button.' So, by assigning appropriate text to the Caption property of controls with (or without) images set to Picture and 1-Graphic set to Style, a means of complying with both parts of Technical Provision (d) has been provided.

Yet, how is text employed to indicate information conveyed by images representing program functions, but not part of controls with Caption properties? Suppose, instead of using cmdAdd as a program element for *SFCalculator*, imgAdd is used. Use an Image control with some graphical plus sign, 'Add.bmp,' as the picture. Since Image controls do not have a Caption Property, an Access Key cannot be used to activate it directly, nor could it be labeled with text. However, imgAdd would be graphically identified and sensitive to mouse actions, therefore, it is identified via text and sensitive to keyboard and mouse actions by means of the Menu Option, mnuAdd, as described above.

> **Accessibility Features, §1194.21(b)**
>
> **Accessibility Features**
>
> (b) Applications shall not disrupt or disable activated features of other products that are identified as accessibility features, where those features are developed and documented according to industry standards. Applications also shall not disrupt or disable activated features of any operating system that are identified as accessibility features where the application programming interface for those accessibility features has been documented by the manufacturer of the operating system and is available to the product developer.

Technical Provision (b) consists of two similar requirements and describes two similar situations. What is the same in both requirements is the moratorium against interfering with activated and documented accessibility features, and the difference is what the accessibility feature belongs to, an OS or another application. The first situation is illustrated when an application interferes with active features of such assistive technology as a screen reader (e.g., disabling the announcement of text that appears on a designated control or portion of the screen). The second situation is illustrated when an application interferes with a Windows Accessibility Option that has been engaged (e.g., disabling some effects of 'Use High Contrast' Mode).

Interference with accessibility features can be caused in a variety of ways and thus comes in various forms: One form is keyboard interference, and another is display interference. If an application uses 'ALT-1' to perform a program function and so does the user's assistive technology, there would be a good chance of a keyboard conflict. The application wins the conflict sometimes, while the assistive technology wins other times. When assistive technology keyboard commands override application keyboard commands, good access and use of that application can be just as problematic as if an accessibility feature of the assistive technology were overridden instead. Some assistive technologies include key-bypass functions, but users of assistive technology shouldn't have to decrease productivity by using an extra keystroke that wouldn't have been necessary had such conflicts not occurred in the first place. As noted above in the discussion of 'Keyboard Methods,' if the users' ability to tab is disabled, via disabling the TabStop property, accessibility features of assistive technology can be disrupted (e.g., not announcing the next control) as well as those of applications (e.g., not being able to use some Access Keys, assuming one categorizes Access Keys as such features). If the Accessibility Option of 'Use High Contrast' is checked, and an application includes program code that changes some of the GUI to different colors, then a display conflict likely would be caused. The latter is illustrated in the section on Technical Provision (g), and the section on Technical Provision (k) illustrates how flashing objects at a certain frequency can interfere with features of some assistive technology. As noted in the discussion on 'Focus,' Technical Provision (c), using a graphical caret without simultaneously tracking it with the invisible SystemCaret will disrupt various features of many assistive technologies. Even certain sizes of fonts can interfere with at least one screen reader.

#### *Input Focus, §1194.21(c)*

#### **Input Focus**

> (c) A well-defined on-screen indication of the current focus shall be provided that moves among interactive interface elements as the input focus changes. The focus shall be programmatically exposed so that assistive technology can track focus and focus changes.

In *SFCalculator*, as with most Windows applications, the Focus takes different visual forms. Sometimes it takes the form of the SystemCaret, or the blinking vertical bar that commonly used for editing (e.g., in Entry 1 and Entry 2). Sometimes it takes the form of a dotted rectangle that moves Focus from Command Button to Command Button when navigating from one to another (e.g., from cmdAdd to cmdSubtract). Sometimes it takes the form of a moving mouse, while sometimes it takes the form of a highlighted Menu Option (e.g., mnuDivide).

The SystemCaret is behind these various forms of the Focus. With Win32API calls, the SystemCaret can be positioned anywhere on the application window, resized and reshaped, created and destroyed, and turned invisible, thus, being able to move and track the Focus in the background. The latter allows developers to use their own graphical version of the Focus in the foreground while synchronizing it with the SystemCaret in the background. If that synchronization is absent or implemented unreliably, the assistive technology that relies on SystemCaret information will likely perform equally or more unreliably. In such a case, requirement (c) and Section 508 would be violated.

How was this accessibility feature enabled in *SFCalculator*? Simply using the Common Control Components that shipped with VB enabled the Focus. A benefit of these programming components is that they intrinsically employ the SystemCaret and its related functions (e.g., getCaretPos and SetCaretPos). By doing so, they provide information vital to the reliable performance of the application and of certain assistive technology (e.g., screen readers, magnification software, or speech-recognitions systems).

#### *Bitmap Images, §1194.21(e)*

> **Bitmap Images**
>
> (e) When bitmap images are used to identify controls, status indicators, or other programmatic elements, the meaning assigned to those images shall be consistent throughout an application's performance.

Inconsistent use of program elements violates good practices in Programming, Usability, UI Design, and Accessible Software Design. The consistent use of program elements is particularly important for accessibility, which is the reason this provision has been included.

For this illustration:

1\. Keep the Picture value of 'Clear.gif,' as described in the previous section.

2\. Below cmdClear, place an Image control with Picture set to 'Clear.gif., and copy the code from Sub cmdClear_Click() to Sub imgClear_Click().

3\. Recompile and run the program.

The meaning of the images is consistent throughout the running of *SFCalculator*. Suppose, however, the two lines that reset txtEntry1 and txtEntry2 are commented out or removed from Sub imgClear_Click(). When the program is recompiled and run, the meaning of the two images is not exactly the same. Clearly, the former complies with (e), while the latter violates it.

**Textual Information, §1194.21(f)**

> **Textual Information**
>
> (f) Textual information shall be provided through operating system functions for displaying text. The minimum information that shall be made available is text content, text input caret location, and text attributes.

All three of these criteria are present in *SFCalculator*; although, in our previous explorations, only Text Content was highlighted. Text Content was apparent with each Command Button or Text Box when it received Focus. It was also conspicuous when entering numbers into Entry 1 or Entry 2.

Text-Input or Caret Position is most obvious when Focus is on a standard Text Box, or, generically speaking, an input or edit field. It is especially obvious for those who can see or feel using a Tactile Display; the caret is visible and blinks at a regular rate; and it typically moves right one character space to indicate the current insertion point. The user of a screen reader will not hear the caret blink, but he or she will know, at least tacitly, that an insertion point moves along to the right as he or she types. However, users of screen readers can use designated keystrokes to determine Caret Position. For example, pressing ALT-DEL with one popular screen reader will reveal the Caret Position in x,y coordinates.

Text Attributes, at least some of them (e.g., Bold, Italics, common Fonts and rough Size), are obvious to those who can see them. For example, all of the Access Keys in *SFCalculator* have the Underline attribute. Tab to Entry 1 and select the default text of '0.' Highlight is another attribute of the selected text. (Of course, if the Font is Chinese Gothic or the Times New Roman Font is 5 Point in size, most Americans who can see are only going to realize that the attributes need to be changed favorably.) As with Caret Position, users of screen readers can use designated keystrokes to determine Text Attributes. For instance, pressing Insert-F with one popular screen reader will reveal something like 'Font = MS Sans Serif 11 Point' if the caret is located on text in one of SFCalculator's Text Boxes.

So, how were these accessibility features enabled in SFCalculator? Using the Common Control Components that shipped with VB enabled the accessibility features. A benefit of these programming components is that important information about them is available to the OS via Win32API, and, in turn, that information is available to assistive technology (e.g., screen readers, magnification software, or speech-recognitions systems). In particular, these components intrinsically make information about Text Content, Caret Position, and Text Attributes available via the Win32API and thus to assistive technology. For example, all the standard VB controls employed in SFCalculator utilize the SystemCaret and its related functions (e.g., GetCaretPos and SetCaretPos), thereby indicating Focus and assisting the user to seamlessly interact with the application.

However, as mentioned in the section on Focus, there are ways to interfere with these features and hence ways to violate Technical Provision (f) and Section 508. To recap, one way is to use a purely graphical caret (a mere look-alike, if you will) without synchronizing the SystemCaret with the look-alike. (In fact, the bitmap or drawn caret may not look like the "real" caret.) Without that SystemCaret to track, assistive technology will not work properly. Another way of interfering would be to employ a non-standard font that didn't use all the necessary text character codes recognized by the OS and thus assistive technology.

Even when employing the SystemCaret and standard fonts, certain values of attributes can interfere with the operation of some assistive technology. For example, at least one screen reader has provided false information when the font size was set to a value greater than 15 Point for Labels. Set the font size for lblEntry1 to 16 Point and recompile and run SFCalculator. The screen reader in question correctly read 'Entry 1 edit zero.' Tabbing to Entry 2, however, it incorrectly reads 'Entry 1 edit zero.' Even if the screen is refreshed, it consistently misidentifies Entry 2 as Entry 1. Text Boxes and Command Buttons do not seem to be as prone to this problem. (This problem has been known to occur in some Outlook and Word e-mails and documents, respectively.) A font size of 8 to 15 Point seems relatively safe, with 10 to 13 point being optimal.

**User Selected Attributes, §1194.21(g)**

> **User Selected Attributes**
>
> (g) Applications shall not override user selected contrast and color selections and other individual display attributes.
>
> Violating Technical Provision (g) is easily illustrated. Add the following code to SFCalculator:
>
> **Private Sub txtEntry1_GotFocus()\
> Me.BackColor = vbRed\
> txtEntry1.BackColor = vbRed\
> txtEntry2.BackColor = vbWhite\
> txtResult.BackColor = vbBlue\
> End Sub**

Recompile and run *SFCalculator*, to see the difference. (If need be, a screen reader's designated keystrokes can be used to announce the changes in foreground and background colors.) The appended code shows that the background color of the Form is red and the three Text Boxes are red, white, and blue. How patriotic! Putting aside the fact that txtEntry2 has white text on a white background, an accessibility barrier has been created for individuals with certain types of color/contrast-sensitivity. Two methods are available. The High Contrast Setting via Accessibility Options can be modified or the Windows Appearance Scheme can be changed. Both can be changed in the Windows Control Panel! Both approaches will now be demonstrated.

Activate the Accessibility Options in the Control Panel, and check the first option on the Display Tab, which reads 'Use High Contrast.' Activate the OK button, and return to run our modified *SFCalculator*. While most of Windows changed its appearance, the red, red, white, and blue background colors remain in this *SFCalculator*. (Note that the latter not only illustrates how to violate Technical Provision (g), but it shows how to violate the second part of Technical Provision (b).) By un-checking the 'Use High Contrast' option and select 'High Contrast' from the Appearance Tab of Display in the Control Panel, the same results are found; the background colors remain. Therefore, this version of *SFCalculator*violates (g). Any application that violates (g) by not providing High Contrast, like black on white, are not usable by people who require high contrast to see.

#### Animation, §1194.21(h) 

> **Animation**
>
> (h) When animation is displayed, the information shall be displayable in at least one non-animated presentation mode at the option of the user.

In other words, information expressed in an animation, at the choice of the user, needs to be made available in a non-animated, accessible format. How provision (h) is implemented is left to the programmer's creativity. One implementation of (h) would be to have an application provide an option to skip animation, while providing an accessible version of any information conveyed by that skipped animation. Another implementation of (h) would be to give the user the option to display the animation while conveying the information in an accessible, non-animated format.

A simple program, 'Section 508 Animation,' will now be created that will illustrate these two implementations of (h). The code is listed below, but first create the form and other controls, that is the GUI.

#### Creating the GUI

1.  1.Enter the VB6 Integrated Development Environment (IDE), and select 'Standard EXE.'
2.  Enter the properties Window, and change the following properties of the Form:

    **Name = frmSection508Animation\
    Caption = Section 508 Animation\
    Height = 3600\
    Left = 0\
    ScaleMode = 3-Pixel\
    Top = 0\
    Width = 4800**

3.  Next, add eight controls to frmSection508Animation and set their properties.
4.  From the Control Tool Box, select three Command Buttons, four Labels, and one Text Box, and place them on frmSection508Animation.
5.  For each control, enter their properties Window, and change the following properties:

    **Command1\
    Name = cmdPressMeFirst\
    Appearance = 0-Flat\
    Caption = PressMeFirst!\
    Left = 136\
    Top = 152**

    **Command2\
    Name = cmdPressMeSecond\
    Appearance = 0-Flat\
    Caption = PressMeSecond!!\
    Left = 48\
    Top = 304**

    Command3

    Name = cmdPressMeFinale

    Caption = PressMeFinale!!

    Left = 856

    Top = 608

    Label1

    Name = lblLine1

    AutoSize = True

    Caption =

    Left = 48

    Top = 40

    Label2

    Name = lblLine2

    AutoSize = True

    Caption =

    Left = 128

    Top = 184

    Label3

    Name = lblLine3

    AutoSize = True

    Caption =

    Left = 32

    Top = 328

    Label4

    Name = lblStatus

    Caption = Status:

    Height = 49

    Left = 32

    Top = 600

    Text1

    Name = txtStatus

    Height = 49

    Left = 120

    Locked = True

    MultiLine = true

    Text =

    Top = 600

    Width = 721

#### Code Behind the GUI

Now, enter the code that is listed below 'Code for Section 508 Animation,' correct any errors, compile, and then run it.

##### Code for Section 508 Animation

**'The following is the code for the program, "Section 508 Animation.exe."**

'Declare global variables

Dim Shift, intPause, intCounter, intLabelCount, intStep, intCount1, intCount2 As Integer

Dim blnMoveForward, blnMoveBackward As Boolean

Dim strMsg As String

'Turns the CommandButtons invisible

Private Sub HideCommandButtons()

cmdPressMeFirst.Visible = False

cmdPressMeSecond.Visible = False

cmdPressMeFinale.Visible = False

End Sub

'Creates the yellow-on-blue StatusBar

Private Sub StatusBar()

lblStatus.BackColor = vbBlue

txtStatus.BackColor = vbBlue

lblStatus.ForeColor = vbYellow

txtStatus.ForeColor = vbYellow

lblStatus.FontSize = 10

lblStatus.FontBold = True

End Sub

'Displays this text after PressMeFinale vanishes

Private Sub DisplayStatus4()

txtStatus.Text = "After activating PressMeFinale, 'Section 508' scrolled right off the screen; 'Guide To' scrolled left off the screen; 'Accessible Software' scrolled right; and PressMeFinale vanished. To exit, click the close symbol at the top right, or press 'ALT-F4.'"

End Sub

'Displays this status when PressMeSecond vanishes to the right

Private Sub DisplayStatus3()

txtStatus.Text = "You pushed PressMeSecond to the far right. Slightly below, left of where PressMeSecond stopped, appeared one-inch, bold white letters, 'Accessible Software.' PressMeSecond vanished, and PressMeFinale appeared at the bottom right corner."

cmdPressMeFinale.Visible = True

End Sub

'Displays this status when PressMeFirst returns from its trip and vanishes

Private Sub DisplayStatus2()

txtStatus.Text = "PressMeFirst quickly moved across the screen, left to right to left again, leaving a temporary trail, then vanished. Slightly above where PressMeFirst traversed, 'Section 508' appeared in one-inch, bold white letters. Slightly below, 'Guide To' appeared in one-inch, bold white letters. Slightly below and left of 'Guide To,' appeared a grey button with black text, 'PressMeSecond!' Please press SPACEBAR on PressMeSecond until it vanishes."

End Sub

'Displays this status immediately following the user selecting the animation path

Private Sub DisplayStatus1()

txtStatus.Text = "On a black background, above and left of center, appears a grey button with black text, 'PressMeFirst!' Across the bottom of the screen, there's a blue StatusBar with yellow text, what you're currently reading. Please click or press ENTER or SPACE on PressMeFirst to begin the animation."

End Sub

'Displays this status text if skipping animation

Private Sub DisplayStatus0()

txtStatus.Text = "On a black background, starting from the top, in one-inch bold white letters, appears 'Section 508' (on line 1), 'Guide To' (on line 2), and 'Accessible Software' (on line 3). Across the bottom of the screen, is a blue StatusBar with yellow text, what you're currently reading. To exit, click the close symbol at the top right, or press 'ALT-F4.'"

End Sub

'Displays the third line of text, "Accessible Software"

Private Sub DisplayLine3()

lblLine3.BackColor = vbBlack

lblLine3.ForeColor = vbWhite

lblLine3.FontBold = True

lblLine3.FontName = "Times new Roman"

lblLine3.FontSize = 72

lblLine3.Caption = "Accessible Software"

End Sub

Private Sub DisplayLine2()

lblLine2.BackColor = vbBlack

lblLine2.ForeColor = vbWhite

lblLine2.FontBold = True

lblLine2.FontName = "Times new Roman"

lblLine2.FontSize = 72

lblLine2.Caption = "Guide To"

End Sub

Private Sub DisplayLine1()

lblLine1.BackColor = vbBlack

lblLine1.ForeColor = vbWhite

lblLine1.FontBold = True

lblLine1.FontName = "Times new Roman"

lblLine1.FontSize = 72

lblLine1.Caption = "Section 508"

End Sub

'Pause subroutine, used to slow annimation

Private Sub Pause()

For intPause = 1 To 75000

Next intPause

End Sub

'Initiates movement of text

Private Sub cmdPressMeFinale_Click()

Call Disappear

End Sub

'Upon each press of SpaceBar, moves PressMeSecond slightly right

Private Sub cmdPressMeSecond_KeyDown(KeyCode As Integer, Shift As Integer)

If KeyCode = vbKeySpace And Shift = 0 Then

If blnMoveForward = True Then

intCount1 = intCount1 + intStep

cmdPressMeSecond.Left = intCount1

If intCount1 >= 700 Then

If intLabelCount = 2 Then

Call HideCommandButtons

Call DisplayLine3

Call DisplayStatus3

intLabelCount = 3

End If

blnMoveForward = False

blnMoveBackward = True

intCount2 = intCount1

End If

End If

End If

End Sub

'Upon one press of SpaceBar or Enter, sends PressMeFirst zooming to the right and back, leaving a temporary trail

Private Sub cmdPressMeFirst_Click()

SendKeys ("{ENTER}")

Pause

If blnMoveForward = True Then

intCount1 = intCount1 + intStep

cmdPressMeFirst.Left = intCount1

If intCount1 >= 500 Then

If intLabelCount = 0 Then

Call DisplayLine1

intLabelCount = 1

End If

blnMoveForward = False

blnMoveBackward = True

intCount2 = intCount1

End If

End If

If blnMoveBackward = True Then

intCount2 = intCount2 - intStep

cmdPressMeFirst.Left = intCount2

If intCount2 <= 40 Then

If intLabelCount = 1 Then

Call DisplayLine2

intLabelCount = 2

End If

blnMoveForward = True

blnMoveBackward = False

intCount1 = intCount2

cmdPressMeFirst.Visible = False

cmdPressMeSecond.Visible = True

cmdPressMeSecond.SetFocus

End If

End If

Call DisplayStatus2

End Sub

'Executes animated vanishing act of "Section 508 Guide To Accessible 'Software"

Private Sub Disappear()

Call DisplayStatus4

For intCounter = lblLine1.Left To 1100

Pause

lblLine1.Move (intCounter)

Next intCounter

For intCounter = lblLine2.Left To -500 Step -1

Pause

lblLine2.Move (intCounter)

Next intCounter

For intCounter = lblLine3.Left To 1050

Pause

lblLine3.Move (intCounter)

Next intCounter

cmdPressMeFinale.Visible = False

End Sub

'Prepares form for interactive animation, and presents user with a choice...

Private Sub YesAnimation()

cmdPressMeSecond.Visible = False

cmdPressMeFinale.Visible = False

strMsg = MsgBox("Do you wish to display a StatusBar that will convey the animation's information, but in static text?", vbYesNo)

If strMsg = vbYes Then

Call StatusBar

Call DisplayStatus1

End If

If strMsg = vbNo Then

txtStatus.Visible = False

lblStatus.Visible = False

End If

End Sub

'Conveys the informational content of the animation path, without using animation

Private Sub NoAnimation()

Call HideCommandButtons

Call DisplayLine1

Call DisplayLine2

Call DisplayLine3

Call StatusBar

Call DisplayStatus0

End Sub

'Presents the user with a choice...

Private Sub AnimationOrNot()

strMsg = MsgBox("Would you like to skip the animation (Yes/No)?", vbYesNo)

If strMsg = vbYes Then Call NoAnimation

If strMsg = vbNo Then Call YesAnimation

End Sub

'Initializes some variables and prepares the form

Private Sub Form_Load()

intLabelCount = 0

intStep = 3

intCount1 = cmdPressMeFirst.Left

intCount2 = intCount1

blnMoveForward = True

blnMoveBackward = False

frm508Animation.WindowState = vbMaximized

frm508Animation.BackColor = vbBlack

Call AnimationOrNot

**End Sub**

#### Exploring and Running Section 508 Animation

When the program is run, the user is prompted to choose between skipping the animation and not skipping the animation. Do not skip it the first time. When the user chooses the animation path, he or she is given the option of having the animation display without or with a Status Bar that will describe the animation and its information in a static, textual version.

For those who see well enough, the scene should be clear with a glance. Those using a screen reader, should hear something like 'PressMeFirst Button.' If they tab, they should hear text that informs them as to what's present on the screen and what to do. When activating 'PressMeFirst' and 'PressMeSecond' then, by tabbing to the Status Bar, updated information about the animation is heard. The same is true about the Status Bar when the Space Bar is used to push 'PressMeSecond' far to the right, so that it vanishes, and shortly after being activated 'PressMeFinale'.

This first path illustrates one way of implementing Technical Provision (h) (the second implementation method mentioned above). The option was given to run the animation without or with a non-animated presentation of the animation's information. When the latter is chosen, such a presentation mode was available, along with the interactive animation. If the former path is chosen, the interactive animation and no Status Bar is presented, which would not be fully accessible to those without usable sight.

Rerun Section 508 Animation. This time, choose the shortest path to the animation's information, at least the essential information. When choosing to skip the animation, the three lines of large static text and the Status Bar describing the scene are presented. Arguably, the essential information conveyed by the animation, when run, was the three lines of large, bold white text. The interactive components and the disappearing lines of text were essential elements and events for the animation, because they drove the animation, but not its basic information.

This shorter path illustrates another way of implementing Technical Provision (h) (the first implementation method mentioned above). The option to skip the animation is available. When animation is skipped, the basic animation information was conveyed textually, that is, in an accessible, non-animated presentation mode.

So, how are these two ways of implementing requirement (h) provided? No especially challenging development was required. First, the GUI is created using standard controls with built-in accessibility, that is, information about them available to assistive technology via the Win32API. Only minor problems were experienced in developing the GUI. Hearing the Caption of lblStatus if Height of it or txtStatus was set higher than 49 was impaired when using one popular screen reader, and the Height and Width of txtStatus had to be adjusted to accommodate different content. Second, from the code, it is discerned that relatively straightforward programming was employed. The two vbYesNo MsgBoxes and four If-Thens provide and manage the user options and user decisions, respectively. The Status Bar and Display Status procedures provide and manage the accessible Status Bar and its content. Basically, these two general parts provide the application features required by (h) and Section 508. The rest of the code generates the interactive animation or is dressing.

**Color Coding, §1194.21(i)**

**Color Coding**

(i) Color coding shall not be used as the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

In other words, this Technical Provision requires that, when using color as an indicator, use it in conjunction with a textual indicator.

To illustrate compliance with (i) and then a violation of (i), modify SFCalculator twice. First, in the blocks of code for mnuDivide and cmdDivide, insert the following line of code immediately following the If-Then line:

txtEntry2.BackColor = vbRed

Immediately following the End-If line, insert in both blocks the following line of code:

txtEntry2.BackColor = vbWhite

Recompile and run SFCalculator. When trying to divide by zero, not only is a warning message delivered, but also a secondary warning indicator is received in the form of the Back Color red of Entry 2. Once the division is changed to divide by a non-zero number, the Divided-by-Zero red warning vanishes from Entry 2.

Second, in the same two blocks of code, temporarily comment out the line of code that causes the Message Box warning. Then recompile and run SFCalculator. Now, when trying to divide by zero, all that occurs is Entry 2 turns red and receives focus. If the user were color blind, he or she wouldn't benefit from any color indicator. Even if the user weren't color blind, some users wouldn't necessarily be able to infer the significance of red without a simple textual warning.

**Color and Contrast, §1194.21(j)**

**Color and Contrast**

*(j)** When a product permits a user to adjust color and contrast settings, a variety of color selections capable of producing a range of contrast levels shall be provided.*

For some people, the use of color is a matter of preference. For others, it is a matter of necessity. Some people with vision impairments require high contrast color schemes while others need to have softer, unsaturated colors and less contrast so as not to suffer a visual "white out." People who suffer eyestrain after even short sessions on the computer find that different color and contrast settings ease the discomfort. The solution to this diversity of requirements is to provide a range of foreground and background color choices. This provision does not require software to allow the user to adjust color and contrast settings. However, products that do allow the user to adjust color and contrast settings are required to provide a variety of color combinations, producing a range of contrast levels.

For most applications, support of the operating system color choices for text and background colors will meet this requirement. If the application is not able to inherit user selected system-wide foreground and background color choices, then provide viewing choices that set both background and foreground text colors. At a minimum, using the following 16 color pallet or an equivalent is recommended.

| # | Color Name\
(Color names are per HTML 4.0) | Color | RGB Value(Hexadecimal) |
| 1 | Black | #000000 |
| 2 | Blue | #0000FF |
| 3 | Lime | #00FF00 |
| 4 | Red | #FF0000 |
| 5 | Aqua | #00FFFF |
| 6 | Fuchsia | #FF00FF |
| 7 | Yellow | #FFFF00 |
| 8 | White | #FFFFFF |
| 9 | Navy | #000080 |
| 10 | Green | #008000 |
| 11 | Maroon | #800000 |
| 12 | Teal | #008080 |
| 13 | Purple | #800080 |
| 14 | Olive | #808000 |
| 15 | Grey | #808080 |
| 16 | Silver | #C0C0C0 |

**Flicker Rate, §1194.21(k)**

**Flicker Rate**

(k) Software shall not use flashing or blinking text, objects, or other elements having a flash or blink frequency greater than 2 Hz and lower than 55 Hz.

Technical Provision (k) is intended to prevent applications from inducing seizures by users prone to having them. By complying with (k), interference with normal operations of assistive technology might be prevented as well. Rather than illustrating what can be added to the programs to make the applications more accessible, the following illustrates what should not be included. This application would be in violation of (k) and Section 508.

Blinker is a simple illustration of the kinds of flashing objects that should not be included in applications. When the blink rate is between two and fifty-five times per second, seizures may be induced in people who are sensitive to photo-induced seizures. An element with a lower or higher blink rate would be in compliance. Before entering the code below 'Code for Blinker,' create the GUI.

#### Creating the GUI

Start a new Standard.Exe, and set the Name property of Form1 to frmBlinker. On frmBlinker, place Label1 left of center, Text1 in the center, and Command1, Command2, and Command3 left to right below Label1 and Text1. In order, assign them the following Name and Caption values, respectively: lblBlinkingTextBox/Blinking TextBox, txtBlinker, cmdIncreaseBlinkRate/&Increase Blink Rate, cmdDecreaseBlinkRate/&Decrease Blink Rate, and cmdExit/E&xit. Check for errors, compile, and test the GUI.

#### Code Behind the GUI

Enter the code listed below, check for errors, recompile, and run Blinker.

#### Code for Blinker

'What follows is the code for the Blinker program. Blinker prompts the user to flash a TextBox between black and white and from zero to one-hundred times per second.

**'Declare global variables.**

Dim intBlinkRatePerSecond, intCount As Integer

Dim strWarning As String

'Flashes txtBlinker black and white every Timer1.interval

Private Sub Timer1_Timer()

If intCount = 1 Then

txtBlinker.BackColor = vbWhite

txtBlinker.ForeColor = vbBlack

End If

If intCount = 0 Then

txtBlinker.BackColor = vbBlack

txtBlinker.ForeColor = vbWhite

End If

intCount = intCount Xor 1

End Sub

'Increases the blink rate to no more than one hundred when activated

Private Sub cmdIncreaseBlinkRate_Click()

If intBlinkRatePerSecond < 100 Then intBlinkRatePerSecond = intBlinkRatePerSecond + 1

If intBlinkRatePerSecond > 0 Then Timer1.Interval = 500 / intBlinkRatePerSecond

If intBlinkRatePerSecond = 0 Then Timer1.Interval = 0

txtBlinker.Text = intBlinkRatePerSecond

End Sub

'Decreases the blink rate to no less than zero when activated

Private Sub cmdDecreaseBlinkRate_Click()

If intBlinkRatePerSecond > 0 Then intBlinkRatePerSecond = intBlinkRatePerSecond - 1

If intBlinkRatePerSecond > 0 Then Timer1.Interval = 500 / intBlinkRatePerSecond

If intBlinkRatePerSecond = 0 Then Timer1.Interval = 0

txtBlinker.Text = intBlinkRatePerSecond

End Sub

'Exits Blinker when activated

Private Sub cmdExit_Click()

Unload Me

End Sub

'Initializes variables and instructs/warns user about Blinker

Private Sub Form_Load()

intCount = 0

intBlinkRatePerSecond = 0

Timer1.Interval = intBlinkRatePerSecond

txtBlinker.Text = intBlinkRatePerSecond

strWarning = MsgBox("You can use the Increase (ALT-I) and Decrease (ALT-D)Buttons to flash the TextBox from zero to one-hundred times per second. Pressing ALT-X will exit Blinker. If a blink rate between two and fifty-five hertz will cause a viewer a ceasure, DO NOT increase the blink rate above two or below fifty-five! Also, a blink rate higher than nine may interfere with announcing of the CommandButtons by some screen readers.")

**End Sub**

#### Exploring Blinker

When Blinker is run, the user is given some instructions and warnings, and then an easy-to-use interface. The user can tab and use Enter, click, or use Access Keys to access and activate the three Command Buttons. The focus can be placed on the Text Box using the mouse or by tabbing to it. The blink rate can be increased and decreased. Now, try the entire gambit of values while using whatever assistive technology is available (being sure to tab around occasionally between changes). Certain blink rates interfere with some assistive technology.

Blinker primarily is an illustration of non-compliance with Section 508.

#### *Electronic Forms, §1194.21(l)*

**Electronic Forms**

(l) When electronic forms are used, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.

Technical Provision (l) requires that forms be compatible with assistive technology and be fully accessible and usable by users of such technology. If keyboard alternatives are provided for navigating through a form, and all elements of the form, including fields to be completed, have sufficiently descriptive text labels located near them, the form is more likely to meet this requirement. Note that, where applicable, no part of the form may violate any of the other requirements, (a)-(k); again, all Technical Provisions must be met for a product to be compliant with Section 508, unless 36 CFR 1194.5 ('Equivalent Facilitation') applies. For example, if (l) is met, but a permanent 30-Hz blinking object displays or it has unchangeable colors somewhere on the form, then the form would be non-compliant in either case.

What is an 'electronic form'? Presumably, it is software-based versions of a paper form---one or more sheets of paper with information/instructions/questions that requires completion by providing certain information and, once completed, submission. A problem with this working definition is that some forms do not have paper versions, or, if they do, benefits of the electronic versions are lost switching to the paper version. Many electronic forms perform input validation, are very interactive, and, in principle, can be completed and submitted by people with or without disabilities; paper forms do not have these advantages. Take the simple Windows Search Dialogue or any Search form on the Web, as an example. The Windows Search Dialogue provides information/instructions and requires the user to provide input and to submit it in order for it to perform a search. The same is true for web Search forms. If printed out, the paper counterparts are not searchable. Certainly, there are forms that are completed, printed, and mailed, but electronic forms are not limited to having paper counterparts. Accordingly, forms are ubiquitous in the computer world, on the desktop and via the Web. A simple Open File or Save File Dialogue counts as a form, and so does an online long version of the 1099.

Forms are so varied and there are so many that providing a guide for creating but a couple is beyond the scope of this document. There are many form-specific software packages as well, and these require their own guides. Some of the guides even address creation of forms with accessibility in mind. The following illustrations create two similar, simple forms, one with VB and the other with Word XP, both of which comply with Technical Provision (l). Both forms have the same name, 'Contact Information Form.'

#### Creating the VB Version

Create the VB version of 'Contact Information Form.' As usual, begin with creating the GUI. In fact, creating the GUI is the majority of labor behind creating the 'Contact Information Form'. The GUI pretty much is the form. The code provides some instructions and enables the user to print or exit the form.

#### Creating the GUI

1.Enter VB, and choose a Standard.Exe.

2.Set the following properties of Form1:

**Name = frmContactInformation**

Caption = Contact Information Form

Height = 8340

Left = -75

Top = -270

**Width = 8145**

3.From the Control ToolBox, place twelve Labels, twelve Text Boxes, and two Command Buttons onto frmContactInformation.

4.Deposit the controls in the following order, and assign them the following property values:

**Label1**

Name = lblFirstName

AutoSize = True

Caption = &First Name

Height = 195

Left = 720

Top = 360

Text1

Name = txtFirstName

Height = 405

Left = 720

Text =

Top = 720

Width = 1935

Label2

Name = lblMiddleName

AutoSize = True

Caption = &Middle Name

Height = 195

Left = 2880

Top = 360

Text2

Name = txtMiddleName

Height = 405

Left = 2880

Text =

Top = 720

Width = 1935

Label3

Name = lblLastName

AutoSize = True

Caption = &Last Name

Height = 195

Left = 5040

Top = 360

Text3

Name = txtLastName

Height = 405

Left = 5040

Text =

Top = 720

Width = 1935

Label4

Name = lblAddressLine1

AutoSize = True

Caption = Address Line &1

Height = 195

Left = 720

Top = 1560

Text4

Name = txtAddressLine1

Height = 405

Left = 1800

Text =

Top = 1560

Width = 4935

Label5

Name = lblAddressLine2

AutoSize = True

Caption = Address Line &2

Height = 195

Left = 720

Top = 2160

Text5

Name = txtAddressLine2

Height = 405

Left = 1800

Text =

Top = 2160

Width = 4935

Label6

Name = lblCity

AutoSize = True

Caption = Village/Town/&City

Height = 195

Left = 720

Top = 2880

Text6

Name = txtCity

Height = 405

Left = 720

Text =

Top = 3240

Width = 1935

Label7

Name = lblState

AutoSize = True

Caption = &State

Height = 195

Left = 2880

Top = 2880

Text7

Name = txtState

Height = 405

Left = 2880

Text =

Top = 3240

Width = 1935

Label8

Name = lblCountry

AutoSize = True

Caption = C&ountry

Height = 195

Left = 5040

Top = 2880

Text8

Name = txtCountry

Height = 405

Left = 5040

Text =

Top = 3240

Width = 1935

Label9

Name = lblZipCode

AutoSize = True

Caption = &Zip Code

Height = 195

Left = 720

Top = 3960

Text9

Name = txtZipCode

Height = 405

Left = 720

MaxLength = 9

Text =

Top = 4320

Width = 1095

Label10

Name = lblHomePhone

AutoSize = True

Caption = &Home Phone #

Height = 195

Left = 2880

Top = 3960

Text10

Name = txtHomePhone

Height = 405

Left = 2880

MaxLength = 10

Text =

Top = 4320

Width = 1095

Label11

Name = lblWorkPhone

AutoSize = True

Caption = &Work Phone #

Height = 195

Left = 5040

Top = 3960

Text11

Name = txtWorkPhone

Height = 405

Left = 5040

MaxLength = 10

Text =

Top = 4320

Width = 1095

Label12

Name = lblGlobalID

AutoSize = True

Caption = &Global Identification #

Height = 195

Left = 720

Top = 5040

Text12

Name = txtGlobalID

Height = 405

Left = 2400

Text =

Top = 5040

Width = 2895

Command1

Name = cmdPrint

Caption = &Print

Left = 3840

Top = 6360

Command2

Name = cmdExit

Caption = E&xit

Left = 5400

**Top = 6360**

5.Correct any errors, compile, and run the form.

6.Here's the test. Try it with some assistive technology. A screen reader will read the name of each field as it is tabbed or shift-tabbed to, that is, as it receives Focus. Other assistive technology should be compatible with the form as well.

The Print and Exit functions have not been implemented yet. Enter the code to make them work and to provide the user some instructions.

#### Code for Contact Information Form

**'What follows is the code for the program, "Contact Information Form.exe"**

'Exits and unloads the program when activated

Private Sub cmdExit_Click()

Unload Me

End Sub

'Prints the form when activated

Private Sub cmdPrint_Click()

frmContactInformation.PrintForm

End Sub

'Displays instructions upon startup

Private Sub Form_Load()

MsgBox "Please complete the following Contact Information Form. Each field has a corresponding AccessKey (e.g., ALT-f for Firstname, ALT-1 for Address line 1, ALT-h for Home Phone #, etc.). Otherwise, use the mouse or TAB to navigate from field to field. There are two CommandButton AccessKeys, ALT-p to Print the form and ALT-x to Exit."

**End Sub**

#### Exploring the Form

Correct any errors, recompile, and run Contact Information Form. The form should work better than before, for the Print and Exit Command Buttons have code to drive them. Again, test it with and without assistive technology.

As discussed in previous sections, there are three general reasons why this form is accessible. First, standard controls are employed. Second, every control has a text identifying it; the Text Boxes have corresponding Labels that have appropriate Caption values, and the Command Buttons have appropriate Caption values. Third, the Labels are either vertically or horizontally aligned with the top left corners of their corresponding Text Boxes.

#### Creating the Word XP Form

Creating a simple 508-compliant form in Word XP can be done in a few steps. (Refer to 'Contact Information Form.doc' for the sample Word form and more details about the form.)

1\. Open a blank, new Word document.

2\. Activate the Forms Tool Bar on the View Pull-Down Menu.

3\. On the first line, center justify and enter the title, 'Contact Information Form.'

4\. On the fourth line, enter the first field label, 'First name.'

5\. On the next line, right under 'First name,' insert the first Edit Box or Text Form Field; both terms refer to the same edit-field control that is found on the Forms Tool Bar.

6\. Press Enter twice.

7\. Repeat the third through fifth steps for the remaining field labels (i.e., 'Middle name,' 'Last name,' 'Address Line #1' ... 'Global Identification'). Each field label should appear on the line above the edit field and two lines below the previous edit field.

8.On the Tools Pull-Down Menu, activate the Protect Document option; activating this option allows one to tab from field to field and input, delete, or edit field contents.

* * * * *

#### Summary

This tutorial has used a sample program, written in Visual Basic 6 Professional, to demonstrate the implementation of the provisions in the Section 508 Software guidelines. The simple program developed demonstrates the various issues that affect accessibility and explore different implementations options available for providing accessibility. Negative examples are provided at points to illustrate the problems created by poor implementations.

Provisions (a), Keyboard Access, and (d), Object Information, were explained together. Three methods, navigation by Tabbing, Access Keys, and Pull Down Menus with Hot Keys, were describe to illustrate how to allow keyboard control and to make information about controls available to screen readers and other accessibility software.

Provision (b), Accessibility Features, was discussed and some common ways for accessibility features to be disrupted were given. One problem is created when an application uses a key sequence already being used by an assistive technology program. Other problems are created when applications override system settings or do not provide the information necessary for system functions to operate effectively.

The Input Focus, provision (c), is controlled by the SystemCaret function. Using the operating system Common Control Components protects the availability of the focus information. If an application uses a custom means for determining the input focus an assistive technology program will be blocked from following the focus.

Provision (e), Bitmap Images, calls for consistent use of images throughout a program. This is a normal mark of good software design that is heighten in importance when accessibility is considered.

Provision (f), Textual Information cites the minimum information to be made available through the operating system, text content, text input caret location and text attributes. With this information assistive technology programs can effectively be employed with a wide variety of applications.

The User Selected Attributes, provision (g) requires that user selected attributes in the operating system, such as color and contrast selections, are respected by the application.

Animation, provision (h), requires that at least one non-animated presentation mode be available. This provision can be provided by allowing the user to skip animation or to provide the information being delivered by the animation in an accessible, non-animated form.

Provision (i), Color Coding simply requires that color not be the only means of conveying information. Use of color to convey information is not discouraged. Only the use of color as the only means of communicating information is forbidden.

If the user is allowed to adjust color and contract provision (j), Color and Contrast, require that a range of color and contrast options be provided to allow for varying visually access needs.

Because photosensitive seizures are a problem for some people provision (k), Flicker Rate, prohibits use of flashing, flicker or blinking between 2 and 55 Hz.

Provision (l), Electronic Forms, requires that electronic forms be usable with assistive technology. Information about field elements and functionality, including directions and cues must be available to the user of assistive technology. Two examples of creating electronic forms are given and their accessibility features described.

These 12 provisions cover the range of requirements provided in the Software Applications and Operating Systems, Technical Provisions (a)-(l). When properly understood and implemented the make operating system and application software accessible for people with disabilities.
