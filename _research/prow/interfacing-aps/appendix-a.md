---
title: "Appendix A: Traffic Signal Controllers"
order-number: 7
toc-group: Interfacing Accessible Pedestrian Signals (APS) with Traffic Signal Control Equipment
banner-title: Interfacing Accessible Pedestrian Signals (APS) with Traffic Signal Control Equipment
status: completed
year-completed: 2003
topic: Public Rights-of-Way
---

## Appendix A: Traffic Signal Controllers

TRAFFIC SIGNAL CONTROL

### Evolution of Controller Standards

The evolution of both the NEMA and Caltrans/NYDOT standards are presented in Figure 33 below. The NEMA TS-1 traffic signal controller standard was developed in 1976, with the goal of providing interchangeability among manufacturers. All of the equipment and software necessary to support the controller operation was specified. A controller cabinet designed to house the controller and associated equipment was also specified, including all of the supporting wiring and configuration. The standard defined basic actuated intersection control, but did not specify hardware allowing controller capabilities to expand with technology.

![A Timeline Showing The Evolution of Traffic Controller Standards From 1920 to Present.](https://www.access-board.gov/images/research/interface-aps/report34.gif)

> Figure 33. A Timeline Showing The Evolution of Traffic Controller Standards From 1920 to Present

Advances in technology and the desired functionality of the TS 1 controllers created several issues. The TS 1 standard focused on the three primary equipment connectors on the front on the controllers. Manufacturers independently added a fourth connector for preemption, coordination, additional detector inputs, and system communications that were not interchangeable, preventing enhanced controller functions. In some cases, system communications was not part of the fourth connector and was brought in through yet another connector. Additional limitations were identified with pretimed operations and capabilities beyond basic traffic control.

These limitations led to development of the TS 2 controller standard, developed in 1992. The TS 2 standard defined two types of controllers and cabinet architectures, the TS 2 Type 1 and TS 2 Type 2. The TS 2 Type 1 controller is unique in the sense that is uses an RS-232/SDLC data link connection to the peripheral devices, with a separate power connector (5). The TS 2 Type 2 provides the same connectors as the TS 1 but also includes the data link connector. This allows the TS 2 Type 2 controller to be installed in TS 1 cabinets, reducing the upgrade costs. The TS 2 standard defines advanced traffic signal operations such as coordination and preemption, and developed standards for pretimed operations and the cabinet. Advanced cabinet monitoring and diagnostics were defined.

The Type 170 controller standard differed from NEMA standards in that it was a hardware standard only. Software to run the controller can be supplied by independent vendors and designed to perform specific applications. Additional standards were developed for ancillary equipment in the cabinet, and the cabinet itself. The development of the Type 170 controller was an attempt to create a controller that could be used to meet current and future traffic needs. Rather than require hardware modification, as with NEMA controllers, the Type 170 responds to new or changing traffic conditions through upgrades or changes to the software. Nevertheless, some tasks do require hardware modifications and additions.

The Type 170 specification required that hardware be interchangeable among manufacturers. Since the software was independent, the controller was basically a general purpose field computer that could be used for a variety of applications beyond traffic signal control. With the necessary software, a Type 170 controller could operate in a simple 2-phase operation or control the most complex interchange. In 1986, the NYS DOT developed the Model 179 controller standard, and in the early 1990's, Caltrans developed the Model 170E controller standard. Both were enhancements to the Model 170 standard to meet current needs, and increased processing power, improved user display capabilities, provided larger memory storage, and enhanced communications capabilities.

Only a few years later, in 1995, the rapid advances in computer technology led Caltrans to develop yet another standard, titled the Model 2070. The goal of the 2070 standard was to provide an advanced controller platform to serve a variety of applications and further define processor, operating system, and software language, while maintaining general compatibility with previous controller (Model 170) standards.  Expanded processing power in the Model 2070 controller allowed for use in a wide variety of applications and provided multiple configurations to fit specific system requirements. The addition of optional VMEBUS modules or serial ports provided additional functionality to include video-imaging, changeable message sign control, and various other communication-based functions. The software and hardware interface was standardized, yet the software remained independent of the controller hardware, allowing for software developed specifically for the desired application.

Several different configuration profiles were developed with the Type 2070 family, including the Type 2070N which is compatible with NEMA interfaces and cabinets. Some issues exist today with the Type 2070 platform, specifically related to the limited number of software vendors and the high cost of the controller hardware.

Current activities are focused on developing a new controller standard, coined the Advanced Traffic Controllers (ATC), which combines the best attributes of NEMA, Type 170, Type 2070 along with emerging ideas and technology. The new ATC platform will provide an open architecture, allowing for software portability. Open architecture will also provide additional applications, with the possibility of running multiple applications on one ATC controller. The ATC standard provides flexibility in hardware development, allowing hardware changes to evolve with technology. Interchangeability between manufacturers is strongly emphasized including connectors, user interface, software, communications, internal networks, and computer and modem modules. The flexibility developed with the ATC standards will allow an ATC controller to work in intersection control (including APS), real-time surveillance, transit systems, communications hubs, field masters, ramp metering, sign control, ITE beacons, video systems, environmental systems, and weigh-in-motion applications.

### Typical Controller Cabinet Components

#### NEMA TS 1 and TS 2

Opening the door of a typical NEMA TS 1 controller cabinet will lead you to the controller itself, along with the conflict monitor, detectors, load switches, other peripheral equipment, and the necessary internal wiring. A circulating fan and filtered vent are included with each cabinet to provide air circulation to minimize heat buildup. A light is provided for working in the cabinet during nighttime hours.

The NEMA TS 2 controller assembly is nearly identical to the TS 1. The two primary differences are the change in controller unit and the conflict monitor is replaced by a malfunction management unit (MMU). The MMU is a more advanced device, not only monitoring all of the conflict voltages, but also communicating with the controller providing an additional element of monitoring. The TS 2 controller also uses a bus interface unit (BIU) for communication between the various control components and detectors. The BIU provides a simplification in cabinet wiring while providing flexibility and power (5). The TS 2 assembly contains a shelf-mounted power supply unit that provides the appropriate power to each of the controller devices. The detectors in the TS 2 cabinet are rack-mounted. A typical TS 2, Type 1 cabinet is shown in Figure 34.

![Typical TS 2 Type 1 Controller Cabinet and Components.  The Picture Shows The Location of the Controller Unit, Detectors, Conflict Monitor, Load Switches, Flasher, and BIU.](https://www.access-board.gov/images/research/interface-aps/report41.jpg)

> > > Figure 34. Typical TS 2 Type 1 Controller Cabinet and Components. The Picture Shows The Location of the Controller Unit, Detectors, Conflict Monitor, Load Switches, Flasher, and BIU.

The controller unit itself simply sits on a shelf in the cabinet. Heavy cables run to each of the four ports on the front of the controller. The "A" connector provides power to the controller as well as inputs and outputs to the cabinet (5). The "B" and "C" connectors provide various inputs and outputs for control. The A, B, and C connectors are standardized by NEMA and are interchangeable amongst all manufacturers. Each connector is different, preventing cables from being inserted in the wrong connection port. The "D" connector provides communication, preemption, and expanded detection capabilities which are used in more advanced systems. Typical controllers have eight available detection inputs. The D connector provides input for eight additions detectors. The D connector is used with TS 1 controllers and is not standardized by NEMA, therefore, may not be interchangeable.

The conflict monitor (TS 1) is also shelf-mounted and wired into the controller system. The conflict monitor performs several very important functions, the most important of which is to prevent two conflicting green indications from being illuminated. The conflict monitor is really a voltage monitor, looking for inappropriate voltages in inappropriate locations or voltages that are above or below desired levels. The conflict monitor (5, 6):

-   Monitors the cabinet field wiring terminals for voltage on conflicting signal indications, focusing on one or more channels of 120-volt AC inputs (i.e., the green, yellow, red, and WALK);
-   Monitors the "absence of red" meaning if the green or yellow is not on, the red should be on (standard feature only in NEMA conflict monitors);
-   Monitors cabinet voltage to assure that the proper operating range is maintained;
-   Monitors itself for proper supply voltage;
-   May monitor intrachannel conflicts and short yellow timing;
-   Does not monitor indication voltage to detect light bulbs that may be out unless all green, yellow or WALK bulbs on a channel burn out. Some agencies such as NYDOT require that a current monitoring feature be added to protect against burned out bulbs.

The inductive loop detectors, or loop detector amplifiers, provide a direct connection to the inductive loops placed in the pavement. Vehicles that pass over the loops are identified by the loop detector amplifiers through changes in inductance. The detectors send vehicle detection information to the controller.

The flasher unit provides the flash sequence in the traffic signals. The flash sequence is implemented either during off-peak hours, most often during late night and early morning times. The flashers are also used when the conflict monitor overrides the signal system and puts the signals into a flash mode.

The Bus Interface Unit (BIU) links the Controller to the Cabinet input/output (I/O) elements (5). It can also be used as a detector interface device. The BIU is responsible for controlling load switches, providing dimming, receiving and isolating pedestrian calls, analyzing detector faults, time-stamping detector calls, and providing detector resets. By design, the BIU is free of operator controls. The BIU performs its I/O functions based upon a pre-wired card rack address.

The load switches receive output from the controller that relay to the terminals located near the bottom of the cabinet (5). Load switches receive a 12-volt DC input for the green, yellow, and red indications, and outputs 120 volts AC to the green, yellow and red field terminals.

Controllers satisfying TS 2 standards are categorized by Type 1 and Type 2 features (5). TS 2 Type 1 controllers contain high speed data channels and have increased capabilities, provide additional diagnostic data, and consume less power than the TS 1 controllers. TS 2 Type 2 controllers contain all of the features of the TS 2 Type 1, but also include additional connectors for data exchange with the terminals and facilities, and may contain a "D" connector for compatibility with TS 1 controllers.

#### Type 170 and Type 2070

The Type 170 and 2070 controller assemblies contain all of the same elements as the NEMA TS 1 (5). The controller itself, conflict monitor, detectors, load switches, peripheral equipment, and appropriate wiring are included. The controller assembly has a different look, using a rack-mounted modular setup. The controller assembly has more of a computer server look than the separate unit look of a typical NEMA setup. Detectors, power supplies, and preemption devices are modularly rack-mounted. The card rack for the input and output devices, called the input/output files, are mounted similarly.

* * * * *

#### TRAFFIC SIGNAL CONTROLLER MANUFACTURERS

Specific information on several traffic signal controllers is presented in the following sections. Information was obtained through phone, e-mail, and Internet contacts with manufacturers. The NEMA controllers are presented first, followed by the Type 170/2070 controllers. General information on conflict monitors and malfunction management units (MMU) is also presented.

Information about traffic signal controllers produced by the following manufacturers is included in this section:

-   Econolite
-   McCain
-   Naztec
-   Peek
-   U.S. Traffic

* * * * *

NEMA Controllers![Eagle EPAC300 Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report42.jpg)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Eagle

#### Type of Controller

EPAC300

Figure 35. Eagle EPAC300 Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

The EPAC300 is a fully actuated controller that can operate in an isolated mode or work in coordination with other intersections. Several different models exist, all with features that exceed the National Electrical Manufacturers Association (NEMA) TS 1 (1989) and TS 2 (1998) Actuated Controller Unit Standards.

The EPAC300 controller can work in a very simple pretimed mode or highly complex actuated control including up to 16 vehicles phases, 16 pedestrian phases, four timing rings, 16 overlap phases and 80 detectors. Adaptive control features allow the controller to make adjustments in maximum green times, protected and permissive left-turn phasing, and coordinated phases. The controller operates in a time-based mode, providing the capability to program 250 events, 99 day, and 10 week alternatives. The controller also works in six different modes of coordination. Diagnostic and reporting programs are resident in the controller to aid in maintenance and troubleshooting, and to obtain performance output.

#### Optional features

Controller types are available that meet TS 1, TS 2 Type 1, and TS 2 Type 2 standards.

#### Installation notes

EPAC300 controllers require a compatible controller cabinet, conflict monitor/malfunction management unit, and related hardware. Eagle produces a number of cabinets in various sizes.

#### Manufacturer

Eagle Traffic Control Systems, Austin, TX

[http://www.eagletcs.com](http://www.eagletcs.com/)

* * * * *

![Econolite ASC/2S-2100 Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report43.jpg)

### Econolite

#### Type of Controller

ASC/2S Series

Figure 36. Econolite ASC/2S-2100 Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

The ASC/2S is a fully actuated controller, developed in 1998. This controller contains features that exceed the NEMA TS 1 and TS 2 Actuated Controller Unit Standards, and is compatible with previous NEMA-based models. Software in the ASC/2S is stored in flash EPROMs (read-only semiconductor memory that is erasable), allowing field software updates without changing PROMs (permanent memory in hardware).

The ASC/2S includes up to 12 vehicle phases, 8 concurrent groups, two timing rings, 16 overlap phases and 64 detectors. The controller can operate in a time-based mode, providing the capability to program multiple events, 16 day, and 10 week alternatives. The controller also works in 64 coordination patterns, each with its own cycle, offset and split. Six priority and four bus preemption sequences are available with an optional transit signal priority control.

Diagnostic and reporting programs are resident in the controller to aid in maintenance and troubleshooting, and to obtain performance output.

#### Optional features

Controller models are available that meet TS 1,TS 2 Type 1, and TS 2 Type 2 standards.

#### Installation notes

ASC/2S controllers require a compatible controller cabinet, conflict monitor/malfunction management unit, and related hardware. Econolite produces a number of cabinets in various sizes.

#### Manufacturer

Econolite Control Products, Inc., Anaheim, CA

[http://www.econolite.com](http://www.econolite.com/)

* * * * *

McCain![McCain Vector GS Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report44.gif)

#### Type of Controller

Vector GS

Figure 37. McCain Vector GS Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

McCain's Vector controller uses an open architecture design that provides maximum flexibility through use of PC-compatible third-party hardware and software. The controller supports up to 16 phases and 4 rings, consistent with the other controller types.

#### Optional features

Controller types are available that meet TS 1, TS 2 Type 1, and TS 2 Type 2 standards.

#### Installation notes

The Vector GS controller requires a compatible controller cabinet, malfunction management unit, and related hardware. Works with NEMA based cabinets and equipment.

#### Comments

Provides an open architecture that allows for third-party computer cards to be installed with new/revised programming features.

#### Manufacturer

McCain Traffic Supply\
[http://www.mccaintraffic.com](http://www.mccaintraffic.com/)

* * * * *

### Naztec![Naztec Series 900 TS 2 Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report45.jpg)

#### Type of Controller

980/981

Figure 38. Naztec Series 900 TS 2 Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

The 980/981 is a fully actuated controller that can operate in an isolated mode or work in coordination with other intersections. The basic difference between the Model 980 (Secondary) and the Model 981 (Master /Secondary) hardware is the additional serial port in the maser unit. The master unit also runs additional software allowing it to serve as a master and a secondary controller in a system configuration. This controller contains features that exceed the NEMA TS 1 (1989) and TS 2 Type 1 and Type 2 (1998) Actuated Controller Unit Standards.

Naztec controllers allow the user to program a maximum of 16 phase sequences by assigning up to 16 phases in 4 separate rings (8 phases per ring). This flexibility combined with NTCIP concurrent phase definitions and 16 overlaps provides a phasing solution for single or multiple intersection control and diamond interchange operation.

Built-in diagnostic allows all input/output sigals, RAM devices, and memory to be tested.

#### Optional features

Controller types are available that meet TS 1,TS 2 Type 1, and TS 2 Type 2 standards.

#### Installation notes

980/981 controllers require a compatible controller cabinet, malfunction management unit, and related hardware. Works with NEMA based cabinets and equipment.

#### Manufacturer

Naztec, Inc., Sugarland, TX 77487\
[http://www.naztec.com](http://www.naztec.com/)

* * * * *

![Peek 3000E Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report46.jpg)Peek

#### Type of Controller

3000E

Figure 39. Peek 3000E Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

The 3000E is a fully actuated controller that can operate in an isolated mode r work in coordination with other intersections. Several different models exist with various features. This controller contains features that exceed the NEMA TS 1 (1989) and TS 2 Type 1 and Type 2 (1998) Actuated Controller Unit Standards.

The 3000E controller can work in a very simple pretimed mode or highly complex actuated control including up to 16 vehicles phases, 16 pedestrian phases, four timing rings, 16 overlap phases and 64 detectors. A pedestrian override allows over timing of phases due to peds, without skipping or short timing other phases during coordination. The controller can operate in a time-based mode, providing the capability to program 220 events, 32 day, and 20 week alternatives in a 99 year clock. The controller also provides coordination through 120 coordination patterns, 24 cycles, 5 offsets/cycles, 24 splits, and automatic permissives.

Diagnostic and reporting programs are resident in the controller to aid in maintenance and troubleshooting, and to obtain performance output.

#### Optional features

Controller types are available that meet TS 1, TS 2 Type 1, and TS 2 Type 2 standards.

#### Installation notes

3000E controllers require a compatible controller cabinet, malfunction management unit, and related hardware. Works with NEMA based cabinets and equipment.

#### Manufacturer

Peek Traffic, Inc., Sarasota, FL 34236\
[http://www.peekglobal.com](http://www.peekglobal.com/)

* * * * *

| **US Traffic Type of Controller 820A** |   |   |
| ![US Traffic Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report47.jpg) |   | ![US Traffic Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report48.jpg) |
| Figure 40 (left). US Traffic Controller Showing Keypad for Entering Information and Wiring Connections. |   | Figure 41 (right). US Traffic 820A Controller Showing Keypad for Entering Information and Wiring Connections. |

#### Standard features

The 820A Series traffic controllers supports various firmware configurations. Features of the 820A OSAM include hardware interconnect capability, both as a secondary and as a time-of-day/day-of-week master. Time-based coordination features 200 events, 16 day plans, 10 week plans, 30 exception days, 16 holidays, and a true yearly schedule. Forty-eight independent coordination plans and 16 traffic responsive free plans provide flexible control with variable phasing. A free or coordinated plan may use any of eight detector plans. Dynamic extension of maximum green time is based on vehicle demand. Max II is selective by time-of-day for each phase. The status of all inputs may be displayed for cabinet wiring verification. On-line diagnostics continuously check for errors and store the last 64 errors with the date and time.

The 820A OSAM also provides remote operations through an RS-232 port that may be connected to a Hayes compatible modem.

#### Optional features

Controller types are available that meet TS 1,TS 2 Type 1, and TS 2 Type 2 standards.

#### Installation notes

The 820A controller requires a compatible controller cabinet, malfunction management unit, and related hardware. Works with NEMA based cabinets and equipment.

#### Comments

Provides an open architecture that allows for third-party computer cards to be installed.

#### Manufacturer

U.S. Traffic Corporation\
[http://www.idc-traffic.com](http://www.idc-traffic.com/)

* * * * *

170/179/2070 Controllers![Eagle 2070 ATC Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report49.jpg)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Eagle

#### Type of Controller

2070

Figure 42. Eagle 2070 ATC Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

The 2070 ATC controller is capable of basic intersection control and full communication within traffic management systems. The open architecture allows the use of market software. Works in modular system. Compatible with Type 170 and Type 170E controllers.

#### Optional features

Can interface with NEMA controllers by using the available interface module.

#### Installation notes

Requires a compatible controller cabinet, conflict monitor, and related hardware.

#### Comments

Provides an open architecture that allows for third-party computer cards to be installed with new/revised programmingfeatures.

#### Manufacturer

Eagle Traffic Control Systems, Austin, TX\
[http://www.eagletcs.com](http://www.eagletcs.com/)

* * * * *

![ Econolite 2070 ATC Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report50.jpg)

### Econolite

#### Type of Controller

ATC2070

Figure 43. Econolite 2070 ATC Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

The ATC2070 controller can be configured to fit all 2070, 170, 170E and NEMA applications. The selection of the appropriate input/output module will allow interface between any cabinet type. Modules exist to provide communication within traffic management systems. The open architecture (OS-9 operating system) allows the use of market software. Compatible with Type 170 and Type 170E controllers.

#### Optional features

Can interface with NEMA controllers by using the available interface module.

#### Installation notes

Requires a compatible controller cabinet, conflict monitor, and related hardware.

#### Comments

Provides an open architecture that allows for third-party computer cards to be installed with new/revised programming features.

#### Manufacturer

Econolite Control Products, Inc., Anaheim, CA

[http://www.econolite.com](http://www.econolite.com/)

* * * * *

### McCain![McCain 2070 Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report52.jpg)

#### Type of Controller

170/2070

Figure 44. McCain 2070 Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

The 2070 and 2070L are based on an open architecture design. The 2070 controller is constructed as a modular system. Each functional part input/output (I/O), Communications, CPU is designed into a separate and removable module. Modules can be replaced or upgraded on an individual basis without having to pull the entire unit. The modules provide parallel and serial I/O for the cabinet interfaces with 64 inputs and outputs arranged in two connectors. The communications modules provide for RS232,RS485, as well as 1200 and 9600 baud modem communication. The software is written in C or C++ and is coded in a modular format. Modules can be added or removed without affecting the rest of the program. The operating system in current use is OS 9. The OS 9 module interfaces between the "C" code and the hardware.

#### Optional features

Several modules available for desired interfaces.

#### Installation notes

The 2070 controller requires a compatible controller cabinet, conflict monitor, and related hardware. Works with 2070 based cabinets and equipment.

#### Comments

None

#### Manufacturer

McCain Traffic Supply\
[http://www.mccaintraffic.com](http://www.mccaintraffic.com/)

* * * * *

![Naztec 2070 Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report53.jpg)

#### Naztec

#### Type of Controller

2070M

Figure 45. Naztec 2070 Controller Showing Keypad for Entering Information and Wiring Connections.

#### Standard features

The 2070 controller is completely compatible with Type 170 and Type 179 controllers. The selection of NEMA input/output module will allow interface with NEMA cabinets. Modules exist to provide communication within traffic management systems. Operating system software is provided with the unit.

#### Optional features

Can interface with NEMA controllers by using the available interface module.

#### Installation notes

Requires a compatible controller cabinet, conflict monitor, and related hardware.

#### Comments

Provides an open architecture that allows for third-party computer cards to be installed with new/revised programming features.

#### Manufacturer

Naztec, Inc., Sugarland, TX\
[http://www.naztec.com](http://www.naztec.com/)

* * * * *

| U.S. Traffic

Type of Controller

Type 170/179/2070 | ![US Traffic 170 Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report54.jpg) |
|   | Figure 46 (upper left). US Traffic 170 Controller Showing Keypad for Entering Information and Wiring Connections. |
|   | ![US Traffic 179 Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report55.jpg) |
|   | Figure 47 (upper right). US Traffic 179 Controller Showing Keypad for Entering Information and Wiring Connections. |
|   | ![US Traffic 2070 Controller Showing Keypad for Entering Information and Wiring Connections.](https://www.access-board.gov/images/research/interface-aps/report56.jpg) |
|   | Figure 48 (lower center). US Traffic 2070 Controller Showing Keypad for Entering Information and Wiring Connections. |

#### Standard features

These controllers use an open systems architecture and have available NEMA TS 1, TS 2 Type 2 Compatible Digital Interfaces. Also compatible with Type 170 cabinets. The controller supports OS 9 and Other Real-Time Operating Systems. Third-Party Software Available for intersection control, communications, and other applications. Through add-on VMEBUS modules or serial ports, other items can be added such as Changeable Message Signs (CMS), Environmental Monitoring Equipment, Video Detection Systems, Camera Control, and various Emergency Monitoring Systems.

#### Optional features

Several modules available for desired interface.

#### Installation notes

The 2070 controller requires a compatible controller cabinet, conflict monitor, and related hardware. Works with 2070 based cabinets and equipment.

#### Manufacturer

U.S. Traffic Corporation[http://www.idc-traffic.com](http://www.idc-traffic.com/)

* * * * *

Support Equipment
-----------------

### Naztec - MMU

#### Type of Control

Malfunction Management Unit (MMU) 516

Figure 49. Naztec Malfunction Management Unit (MMU).

#### Standard features

The Naztec MMU monitors up to 16 traffic signal indications (channels) for conflict, improper sequencing, incorrect timing, and improper signal voltage levels. The MMU is also capable of operating in older TS1 type cabinets, and is compatible with 12-channel Conflict Monitor Units conforming to the TS 1 standard.

All connectors, indicators and operator controls are located on the front panel of the MMU. Channel and control input signals and relay output connections are made through two connectors.Indicators on the front of the MMU provide status and fault information.

The MMU performs continuous diagnostic tests during all operating modes. All memory elements, the microprocessor, operating voltages, and critical circuitry are checked.

#### Manufacturer

Naztec, Inc., Sugarland, TX\
[http://www.naztec.com](http://www.naztec.com/)

* * * * *

![ Naztec Conflict Monitor.](https://www.access-board.gov/images/research/interface-aps/report58.jpg)

#### Naztec --- Conflict Monitor

#### Type of Control

Conflict Monitor Unit (CMU)

Figure 50. Naztec Conflict Monitor.

#### Standard features

The conflict (and power) monitor is built in accordance with NEMA TS1 specifications.

In addition to standard NEMA requirements, the conflict monitor can be programmed to monitor for short yellow and green intervals, sequence failures, and red failures. Failures can be either logged or latched. A real-time clock allows time and date stamping of all events. LED indicators are used to display all failures. The RS-232 port may be used to interface with a personal computer, printer, or traffic control system. Port setup including baud rate selection is accomplished via the keyboard. Printed reports include Program Options, Fault History, Power History, Tracing, and Program Card.

#### Manufacturer

Naztec, Inc., Sugarland, TX\
[http://www.naztec.com](http://www.naztec.com/)

* * * * *

![ Naztec Bus Interface Unit (BIU).](https://www.access-board.gov/images/research/interface-aps/report59.jpg)

### Naztec - BIU

#### Type of Control

Bus Interface Unit (BIU)

#### Figure 51. Naztec Bus Interface Unit (BIU).

#### Standard features

The Bus Interface Unit (BIU) links the TS-2 Controller Unit to the Cabinet I/O. It is responsible for controlling load switches, providing dimming, receiving and isolating pedestrian calls, analyzing detector faults, time-stamping detector calls, and providing detector resets. By design, the BIU is free of operator controls. The BIU performs its I/O functions based upon a pre-wired card rack address.

#### Manufacturer

Naztec, Inc., Sugarland, TX\
[http://www.naztec.com](http://www.naztec.com/)

* * * * *

![Naztec Loop Detector Amplifier Card.](https://www.access-board.gov/images/research/interface-aps/report60.jpg)

### Naztec - Detectors

#### Type of Control

Detector

#### Figure 52. Naztec Loop Detector Amplifier Card.

#### Standard features

The Inductive Loop Detector provides vehicle detection. Frequency and sensitivity can be set to eliminate problems with interference and false calls (cross-talk) from adjacent loops. In *Pulse Mode*, the detector provides an 150 millisecond pulse in response to a detection. In *Presence Mode*, the output from the detector is active as long as a vehicle is present on the loop. An LED indicates when a vehicle is on the loop or if Delay or Extension is active. Photo shows a rack-mounted detector. Detectors also come as a stand-alone unit.

#### Manufacturer

Naztec, Inc., Sugarland, TX\
[http://www.naztec.com](http://www.naztec.com/)

* * * * *

### Traffic Signal Controller Manufacturers

The manufacturers listed below offer traffic signal controller and related products. Other manufacturers may exist.

**Eagle Traffic Control Systems**\
8004 Cameron Road\
Austin, TX 78754-3899\
Telephone: (512) 837-8310\
Fax: (512) 837-0196\
E-mail: <info@eagletcs.com>\
Web site: [http://www.eagletcs.com](http://www.eagletcs.com/)

**Econolite Control Products, Inc.**\
3360 E. La Palma\
Anahim, CA 92806-2856\
Telephone: (714) 630-3700\
Fax: (714) 630-6349\
E-mail: <sales@econolite.com>\
Web site: [http://www.econolite.com](http://www.econolite.com/)

**Peek Traffic, Inc.**\
1500 N. Washington Blvd.\
Sarasota, FL 34236\
Telephone: (941) 366-8770\
Fax: (941) 365-0837\
E-mail: <usinfo@peekglobal.com>\
Web site: [http://www.peekglobal.com](http://www.peekglobal.com/)

**Naztec, Inc**\
820 Park Two Dr.\
Sugar Land, TX 77478, USA.\
Telephone: (281) 240-7233\
Fax: (281) 240-7238\
E-mail: <naztec@naztec.com>\
Web site: [http://www.naztec.com](http://www.naztec.com/)

**McCain Traffic Supply**\
2575 Pioneer Avenue\
Vista, CA 92083\
Telephone: (760) 727-8100\
Fax: (760) 727-8264\
E-mail: <mccain@mccaintraffic.com>\
Web site: [http://www.mccaintraffic.com](http://www.mccaintraffic.com/)

**U.S. Traffic Corporation**\
9603 John Street\
Santa Fe Springs, CA 90670\
Telephone: (562) 923-9600\
Fax: (562) 923-7555\
E-mail: <info@ustraffic.net>\
Web site: [http://www.ustraffic.net](http://www.ustraffic.net/)
