
"use client";

import { AuthGuard } from "@/components/auth/auth-guard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  MessageSquare,
  Zap,
  GraduationCap,
  Lightbulb,
  Cpu,
  Code,
  Search,
  Monitor,
  Workflow,
  CheckCircle,
  ShieldCheck,
  Activity,
  Globe,
  Database,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Settings,
  HardDrive,
  CircuitBoard,
  Waves,
  Layers,
  Activity as Pulse,
  Usb,
  Lock,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: Logic & Hardware Foundations",
    level: "Beginner",
    steps: [
      {
        what: "C for Firmware (Bitwise & Pointers)",
        why: "C is the industry standard for firmware. You must master bitwise manipulation to control hardware registers and pointers for memory efficiency.",
        time: "2 Weeks",
        prereqs: "Basic Logic",
        resources: [
          { name: "C Programming for Embedded (YouTube)", url: "https://www.youtube.com/watch?v=PbTeIdscofY" },
          { name: "Bitwise Operators in C", url: "https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/" },
        ],
        practice: "Write a program to reverse the bits of a 16-bit integer and set/clear specific bits without a library.",
      },
      {
        what: "Electronics 101: Voltage, Current & Resistance",
        why: "Firmware developers must understand the electrical path. You need to know Ohm's Law and how to read basic schematics.",
        time: "1 Week",
        prereqs: "High School Physics",
        resources: [
          { name: "Electronics for Beginners", url: "https://www.youtube.com/playlist?list=PLah6faXAgguOeM_vW_O-uW_MHoW5InIn4" },
        ],
        practice: "Build a physical circuit with a resistor and LED. Measure the voltage drop using a multimeter.",
      },
      {
        what: "Microcontroller (MCU) Architecture",
        why: "To write code, you must know where it lives. Learn about Flash (code), RAM (variables), and CPU registers.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Computer Architecture (Coursera)", url: "https://www.coursera.org/learn/comparch" },
        ],
        practice: "Download a datasheet for an MCU (e.g., STM32 or AVR) and find the 'Memory Map' section.",
      },
      {
        what: "Compilers, Linkers & Toolchains",
        why: "To understand how C becomes a binary file (.hex/.bin). Learn about GCC, LLVM, and the role of the Linker Script.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Embedded Toolchains Explained", url: "https://www.youtube.com/watch?v=id-toolchains" },
        ],
        practice: "Modify a linker script to move a specific array into a custom memory section.",
      },
      {
        what: "GPIO & Digital Input/Output",
        why: "The basic way to talk to the world. Controlling pins to turn on lights or read buttons is the foundation.",
        time: "3 Days",
        prereqs: "Step 3",
        resources: [
          { name: "GPIO Tutorial (YouTube)", url: "https://www.youtube.com/watch?v=be7_m_v_vEY" },
        ],
        practice: "Write a 'Blinky' program using direct register access (no HAL) to toggle an LED.",
      },
      {
        what: "Timers & PWM (Pulse Width Modulation)",
        why: "Timers handle precise intervals. PWM is used for motor control, LED dimming, and audio generation.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Timers & PWM Explained", url: "https://www.youtube.com/watch?v=look-up-pwm" },
        ],
        practice: "Create a breathing LED effect by varying the PWM duty cycle over time.",
      },
      {
        what: "Communication Protocols I: UART",
        why: "Universal Asynchronous Receiver-Transmitter is the simplest way to get debug data from a chip to a PC.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "UART Basics", url: "https://www.youtube.com/watch?v=sTHckUuxyH8" },
        ],
        practice: "Implement a 'printf' wrapper that sends strings over UART to a serial monitor.",
      },
      {
        what: "Reading & Interpreting Datasheets",
        why: "The datasheet is your 'Bible'. You must be able to find register addresses, timing diagrams, and errata.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "How to Read a Datasheet (Ladyada)", url: "https://www.youtube.com/watch?v=sxu_vOfX9_0" },
        ],
        practice: "Find the 'Absolute Maximum Ratings' for voltage on an ATmega328P or STM32F1.",
      },
      {
        what: "Embedded IDEs & Debuggers (GDB)",
        why: "Hardware debugging requires special tools. Learn to use ST-Link or J-Link with GDB to step through code on chip.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Debugging with GDB", url: "https://www.youtube.com/watch?v=id-debug-embedded" },
        ],
        practice: "Set a hardware breakpoint and watch a variable change value in memory while the code is running.",
      },
      {
        what: "Bare-Metal State Machines",
        why: "Firmware often doesn't have an OS. You must learn to structure code using non-blocking state machines.",
        time: "1 Week",
        prereqs: "Step 5",
        resources: [
          { name: "Finite State Machines in C", url: "https://www.embedded.com/finite-state-machines-for-embedded-systems/" },
        ],
        practice: "Build a traffic light controller logic that handles multiple states without using 'delay()'.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Peripherals & RTOS",
    level: "Intermediate",
    steps: [
      {
        what: "Interrupts & ISR Best Practices",
        why: "Interrupts allow the CPU to react to real-time events. Poorly written ISRs cause 90% of firmware bugs.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "Interrupts Deep Dive", url: "https://www.youtube.com/watch?v=uV9_vMYz_xs" },
        ],
        practice: "Write an ISR for a button press that uses software debouncing logic.",
      },
      {
        what: "I2C & SPI Protocols",
        why: "To talk to 99% of sensors and displays. Learn about Master/Slave relationships and clock polarities.",
        time: "1 Week",
        prereqs: "Step 7",
        resources: [
          { name: "SPI vs I2C (YouTube)", url: "https://www.youtube.com/watch?v=6IAkYpmA1DQ" },
        ],
        practice: "Read the X/Y/Z data from an I2C accelerometer and print it to the console.",
      },
      {
        what: "ADC & Analog Sensors",
        why: "Microcontrollers are digital, but the world is analog. ADCs convert voltage into numbers your code can process.",
        time: "1 Week",
        prereqs: "Electronics 101",
        resources: [
          { name: "ADC Basics", url: "https://www.youtube.com/watch?v=look-up-adc" },
        ],
        practice: "Read a light sensor (LDR) value and adjust an LED's brightness accordingly.",
      },
      {
        what: "RTOS Fundamentals (FreeRTOS)",
        why: "For complex apps, you need a scheduler. Learn about Tasks, Priorities, and context switching.",
        time: "2 Weeks",
        prereqs: "Step 10, Step 11",
        resources: [
          { name: "FreeRTOS Course (YouTube)", url: "https://www.youtube.com/playlist?list=PLPW886-8bbnyweE06iZ4Zis6bcZ6_Yks6" },
        ],
        practice: "Create a FreeRTOS project with two tasks: one for sensor reading and one for UI updating.",
      },
      {
        what: "RTOS Sync: Semaphores & Queues",
        why: "To safely share data between tasks and prevent 'Race Conditions'.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Semaphores vs Mutexes", url: "https://www.baeldung.com/cs/semaphore-vs-mutex" },
        ],
        practice: "Implement a message queue to pass sensor data from a high-priority task to a low-priority display task.",
      },
      {
        what: "Direct Memory Access (DMA)",
        why: "DMA offloads data movement from the CPU, which is essential for high-speed audio or display data.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "DMA Explained", url: "https://www.youtube.com/watch?v=id-dma-embedded" },
        ],
        practice: "Configure a DMA transfer to move a block of data from one buffer to another without CPU intervention.",
      },
      {
        what: "Power Management & Low Power Modes",
        why: "Battery-powered devices (game controllers, wearables) must sleep to survive. Master Sleep, Stop, and Standby.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Low Power Embedded Systems", url: "https://www.youtube.com/watch?v=id-low-power" },
        ],
        practice: "Measure current consumption and optimize a script to use the 'Wait For Interrupt' (WFI) instruction.",
      },
      {
        what: "Bootloaders & OTA Updates",
        why: "To update firmware in the field. Learn about Flash partitioning and integrity checks (CRC/Checksum).",
        time: "1 Week",
        prereqs: "Step 4, Step 9",
        resources: [
          { name: "Writing a Bootloader (YouTube)", url: "https://www.youtube.com/watch?v=look-up-bootloader" },
        ],
        practice: "Write a simple 'Jump to Application' function that switches execution to a different memory address.",
      },
      {
        what: "Unit Testing for Firmware (Unity/Unity-Test)",
        why: "Firmware is hard to test. Unit tests allow you to verify logic on your PC before flashing the chip.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "Unity Test Framework", url: "https://www.throwtheswitch.org/unity" },
        ],
        practice: "Write unit tests for a circular buffer implementation used in your serial communication code.",
      },
      {
        what: "Defensive Programming (Watchdogs)",
        why: "Hardware can glitch. Watchdog timers (WDT) are the last line of defense to reset a hung system.",
        time: "4 Days",
        prereqs: "Step 11",
        resources: [
          { name: "Watchdog Timers Guide", url: "https://www.embedded.com/watchdog-timers/" },
        ],
        practice: "Intentionally cause an infinite loop in your code and verify the Watchdog resets the system.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems & Security",
    level: "Advanced",
    steps: [
      {
        what: "ARM Cortex-M Architecture Deep Dive",
        why: "The architecture behind 90% of modern firmware. Learn about the Vector Table, NVIC, and Fault Handlers.",
        time: "2 Weeks",
        prereqs: "Intermediate Stage",
        resources: [
          { name: "The Definitive Guide to ARM Cortex-M", url: "https://www.amazon.com/Definitive-Guide-ARM-Cortex-M3-Cortex-M4-Processors/dp/0124080820" },
        ],
        practice: "Write a custom HardFault handler that prints the stack frame to UART when the app crashes.",
      },
      {
        what: "Embedded Linux Foundations",
        why: "For high-end systems (consoles, gateways). Learn about the Kernel, Device Trees, and User Space.",
        time: "3 Weeks",
        prereqs: "Linux CLI",
        resources: [
          { name: "Embedded Linux Course (Bootlin)", url: "https://bootlin.com/training/embedded-linux/" },
        ],
        practice: "Build a minimal Linux image for a Raspberry Pi using Buildroot.",
      },
      {
        what: "USB Protocol & HID Devices",
        why: "Essential for game controllers. Learn how a device describes itself to a PC as a mouse or gamepad.",
        time: "2 Weeks",
        prereqs: "Step 12",
        resources: [
          { name: "USB in a Nutshell", url: "https://www.beyondlogic.org/usbnutshell/usb1.shtml" },
        ],
        practice: "Turn an MCU into a custom USB Gamepad that sends button presses to a computer.",
      },
      {
        what: "Wireless Stacks: BLE & Wi-Fi",
        why: "To connect devices to smartphones and the cloud. Master GATT profiles and socket programming.",
        time: "2 Weeks",
        prereqs: "Networking Basics",
        resources: [
          { name: "BLE fundamentals", url: "https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/ug_bt_le_controller.html" },
        ],
        practice: "Send sensor data from your board to a smartphone app via Bluetooth Low Energy.",
      },
      {
        what: "Firmware Security: Secure Boot",
        why: "To prevent hackers from running malicious code on your hardware. Learn about Digital Signatures and Root of Trust.",
        time: "2 Weeks",
        prereqs: "Cryptography Basics",
        resources: [
          { name: "Intro to Secure Boot", url: "https://www.youtube.com/watch?v=id-secure-boot" },
        ],
        practice: "Implement a verification step in your bootloader that checks a SHA-256 hash of the application code.",
      },
      {
        what: "DSP for Firmware (CMSIS-DSP)",
        why: "To process audio, vibration, or sensor data efficiently using specialized math libraries.",
        time: "2 Weeks",
        prereqs: "Calculus",
        resources: [
          { name: "DSP for Embedded", url: "https://www.youtube.com/watch?v=look-up-dsp" },
        ],
        practice: "Implement a Low-Pass filter to remove noise from an analog sensor signal in real-time.",
      },
      {
        what: "Performance Profiling & Real-time Analysis",
        why: "To identify code that is too slow. SRE-like monitoring for hardware.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Profiling Embedded Code", url: "https://www.embedded.com/profiling-embedded-software-for-performance-and-efficiency/" },
        ],
        practice: "Use a logic analyzer to measure the exact latency between a button press and a serial output.",
      },
      {
        what: "CI/CD for Firmware (HIL Testing)",
        why: "Automate builds and tests on real hardware (Hardware-In-The-Loop) every time code is pushed.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "CI for Firmware", url: "https://www.youtube.com/watch?v=id-ci-firmware" },
        ],
        practice: "Set up a GitHub Action that compiles your project and reports binary size increases.",
      },
      {
        what: "Safety Critical Coding (MISRA C)",
        why: "Standards for code that cannot fail (Automotive, Medical). Learn to write 'bulletproof' C.",
        time: "1 Week",
        prereqs: "C Mastery",
        resources: [
          { name: "MISRA C Introduction", url: "https://www.misra.org.uk/" },
        ],
        practice: "Audit a previous project using a static analysis tool like 'cppcheck' for MISRA violations.",
      },
      {
        what: "Technical Writing & Soft Skills",
        why: "Firmware engineers must bridge the gap between hardware designers and software users. Clarity is key.",
        time: "Ongoing",
        prereqs: "None",
        resources: [],
        practice: "Write a clear technical specification for a new firmware communication protocol.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Smart LED System", teaches: "GPIO, PWM, and simple C state logic.", tech: "C, Arduino/STM32" },
  { level: "Beginner", title: "Binary Clock", teaches: "Timers, Interrupts, and 7-segment displays.", tech: "C, RTC" },
  { level: "Beginner", title: "Serial Chat Tool", teaches: "UART, Buffers, and CLI parsing.", tech: "C, UART" },
  { level: "Intermediate", title: "USB Game Controller", teaches: "USB HID protocol, descriptors, and low-latency input.", tech: "C, USB Stack" },
  { level: "Intermediate", title: "FreeRTOS Weather Node", teaches: "Multi-tasking, I2C, and SPI sensors.", tech: "FreeRTOS, BME280" },
  { level: "Intermediate", title: "Datalogger to SD Card", teaches: "File systems (FATFS), SPI, and power management.", tech: "C, SDIO" },
  { level: "Intermediate", title: "MIDI Music Controller", teaches: "Analog-to-Digital conversion and MIDI protocol.", tech: "C, ADC" },
  { level: "Advanced", title: "Secure OTA Bootloader", teaches: "Flash management, Hashing, and jump vectors.", tech: "C, Cryptography" },
  { level: "Advanced", title: "Embedded Linux Media Player", teaches: "Kernel modules, ALSA (Audio), and Linux user-space.", tech: "Yocto, ARM" },
  { level: "Advanced", title: "CAN Bus Car Dashboard", teaches: "Automotive protocols, message filtering, and BLE.", tech: "C, CAN, BLE" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Firmware Hobbyist",
    description: "Focus on C and core MCU peripherals to build functional local tools.",
    schedule: [
      "Days 1-10: C Programming and MCU architecture fundamentals.",
      "Days 11-20: GPIO, Timers, Interrupts, and PWM.",
      "Days 21-30: UART communication and building the Smart LED project.",
    ]
  },
  {
    title: "60-Day Standard Plan: The Systems Developer",
    description: "Balanced path covering sensor integration, RTOS, and debugging.",
    schedule: [
      "Days 1-20: Thorough coverage of Beginner Stage.",
      "Days 21-40: I2C, SPI, ADCs, and Sensor data collection.",
      "Days 41-60: FreeRTOS fundamentals and building the MIDI Controller.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Industrial Architect",
    description: "Comprehensive path including Linux, Security, and production workflows.",
    schedule: [
      "Days 1-30: Core MCU & RTOS foundations.",
      "Days 31-60: Advanced Protocols (USB/CAN) and Testing.",
      "Days 61-90: Embedded Linux, Security, and Job Preparation.",
    ]
  }
];

const interviewTopics = [
  "Explain the difference between a Microprocessor and a Microcontroller.",
  "Describe the boot sequence of an ARM Cortex-M chip.",
  "How does a CPU handle an Interrupt Service Routine (ISR)?",
  "What is 'volatile' in C and why is it mandatory for register access?",
  "Explain I2C vs SPI: Pin count, speed, and Master/Slave logic.",
  "What is a Watchdog Timer and how does it prevent bricking?",
  "Describe the memory layout of an embedded C program (Stack vs Heap).",
  "How does a scheduler in an RTOS work?",
  "What is Little-Endian vs Big-Endian? How do you test for it?",
  "Explain the role of a Linker Script.",
];

const codingQuestions = [
  { question: "Reverse the bits of a byte using bitwise operators.", topic: "Bitwise Ops" },
  { question: "Implement a circular buffer (ring buffer) in C.", topic: "Data Structures" },
  { question: "Write a function to check if a number is a power of 2 using bitwise ops.", topic: "Math Logic" },
  { question: "Write code to set the 5th bit of a 32-bit register without affecting others.", topic: "Register Access" },
];

const mcqs = [
  { question: "Which C keyword prevents the compiler from optimizing away a variable?", options: ["static", "const", "volatile", "extern"], answer: "volatile" },
  { question: "What is the standard voltage level for a 'logic high' on most modern MCUs?", options: ["1.8V", "3.3V", "5V", "12V"], answer: "3.3V" },
  { question: "Which protocol uses a 'Chip Select' (CS) line?", options: ["UART", "I2C", "SPI", "CAN"], answer: "SPI" },
];

const mistakes = [
  "Hardcoding register addresses instead of using CMSIS header files.",
  "Doing too much work inside an ISR (keep them short and sweet).",
  "Neglecting power management, draining batteries in minutes.",
  "Forgetting the 'volatile' keyword for shared variables.",
  "Not reading the 'Errata' sheet of the MCU before starting.",
  "Ignoring compiler warnings, which often point to serious memory bugs.",
  "Using 'float' math on a chip without a Floating Point Unit (FPU).",
  "Lack of error handling for communication protocols (e.g., I2C timeouts).",
  "Not using a logic analyzer to verify physical signal timing.",
  "Trying to build complex logic with 'delay()' instead of state machines.",
];

export default function FirmwareDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <CircuitBoard className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            Firmware Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the deep craft of writing software that touches silicon. From blinking your first LED to architecting secure, real-time operating systems for mission-critical hardware.
          </p>
        </header>

        <Button asChild variant="ghost" className="mb-4 self-start">
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to roadmaps
          </Link>
        </Button>

        {stages.map((stage) => (
          <Card key={stage.title} className="border-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3 text-primary">
                <Brain className="h-8 w-8" />
                {stage.title}
              </CardTitle>
              <CardDescription>Master the pillars of the {stage.level} level.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {stage.steps.map((step, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center text-xs shrink-0">{index + 1}</span>
                        {step.what}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <p><strong>Why it’s important:</strong> {step.why}</p>
                            <p><strong>Time Estimate:</strong> {step.time}</p>
                            <p><strong>Prerequisites:</strong> {step.prereqs}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-xl border border-border">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-primary"><Monitor className="h-4 w-4"/> Practice Task:</h4>
                            <p className="text-sm leading-relaxed">{step.practice}</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3 text-sm flex items-center gap-2"><Code className="h-4 w-4 text-primary"/> Free Resources:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.resources.map(res => (
                              <li key={res.url} className="list-none">
                                <a href={res.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                                  <div className="bg-primary/10 p-1.5 rounded-md group-hover:bg-primary/20">
                                    <Zap className="h-3 w-3 text-primary"/>
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{res.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        <Card className="border-2 border-primary/20 bg-primary/[0.02]">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><Zap className="h-8 w-8 text-primary"/>Project Ideas</CardTitle>
            <CardDescription>Build these 10 projects to showcase your firmware expertise.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <Card key={p.title} className="bg-card hover:shadow-md transition-all border-2">
                <CardHeader className="pb-3">
                  <Badge variant={p.level === 'Beginner' ? 'default' : p.level === 'Intermediate' ? 'secondary' : 'destructive'} className="w-fit">{p.level}</Badge>
                  <CardTitle className="text-xl pt-2">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p className="text-muted-foreground line-clamp-2"><strong>Teaches:</strong> {p.teaches}</p>
                  <div className="flex items-center gap-2 text-xs font-mono bg-muted p-2 rounded text-primary">
                    <Terminal className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Pick a timeline that matches your goals.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="p-6 border-2 rounded-2xl bg-card shadow-sm hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-xl mb-3 text-primary">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.schedule.map(item => (
                      <li key={item} className="text-sm flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent bg-accent/5">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><MessageSquare className="h-8 w-8 text-primary"/>Interview Preparation</CardTitle>
            <CardDescription>Master the topics required to land a role as a Firmware Engineer.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Critical Interview Topics</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {interviewTopics.map(topic => (
                    <li key={topic} className="flex items-center gap-2 text-sm bg-background p-2 rounded-lg border shadow-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><Code className="h-5 w-5 text-primary"/> Firmware Logic Challenges</h3>
                <div className="space-y-3">
                  {codingQuestions.map(q => (
                    <div key={q.question} className="p-4 border rounded-xl bg-card hover:border-primary/30 transition-colors">
                      <p className="font-semibold text-xs uppercase tracking-wider text-primary mb-1">{q.topic}</p>
                      <p className="text-sm leading-relaxed">{q.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t space-y-6">
              <h3 className="font-bold text-xl text-center">Resume & Career Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['C', 'Bare-metal', 'RTOS', 'FreeRTOS', 'ARM Cortex-M', 'UART', 'I2C', 'SPI', 'DMA', 'Bootloaders', 'Secure Boot', 'MISRA C', 'GDB', 'Logic Analyzers'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include photos or videos of your hardware projects in GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Document your 'Design Choices' (e.g., Why you chose I2C over SPI).</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Highlight experience with low-power optimization.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
          <CardHeader className="bg-destructive/10 border-b border-destructive/10 py-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-destructive">
              <Lightbulb className="h-6 w-6"/>
              10 Mistakes to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {mistakes.map((mistake, i) => (
                <li key={i} className="text-sm flex items-start gap-3 text-foreground/80">
                  <span className="text-destructive font-black shrink-0">{i + 1}.</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center py-16 bg-gradient-to-br from-primary/20 via-background to-primary/10 rounded-[3rem] border-2 shadow-inner">
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the digital heartbeat.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Firmware development is the ultimate bridge between the abstract world of software and the physical laws of electronics. Stay consistent, read the manual (and the errata!), and always keep safety in mind. Your code is what makes the hardware come to life. You've got this!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Firmware Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-2">
              <Link href="/learn">
                Explore Other Roadmaps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
