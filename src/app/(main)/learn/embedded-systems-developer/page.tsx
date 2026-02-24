
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
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    title: "Beginner Stage: C & Microcontroller Foundations",
    level: "Beginner",
    steps: [
      {
        what: "C Programming for Embedded Systems",
        why: "C is the lingua franca of embedded systems. You must master bitwise operators, pointers, and memory-mapped I/O.",
        time: "2 Weeks",
        prereqs: "None",
        resources: [
          { name: "C for Embedded Systems (YouTube)", url: "https://www.youtube.com/watch?v=PbTeIdscofY" },
          { name: "Modern Embedded Systems Programming (Quantum Leaps)", url: "https://www.youtube.com/playlist?list=PLPW886-8bbnyweE06iZ4Zis6bcZ6_Yks6" },
        ],
        practice: "Write a program to manipulate specific bits in a register (set, clear, toggle) without affecting others.",
      },
      {
        what: "Electronics Fundamentals",
        why: "To understand how components interact. You need to know Ohm's Law, diodes, transistors, and how to read a schematic.",
        time: "1 Week",
        prereqs: "Basic Math",
        resources: [
          { name: "Electronics for Absolute Beginners", url: "https://www.youtube.com/playlist?list=PLah6faXAgguOeM_vW_O-uW_MHoW5InIn4" },
          { name: "SparkFun: How to read a schematic", url: "https://learn.sparkfun.com/tutorials/how-to-read-a-schematic" },
        ],
        practice: "Build a simple circuit on a breadboard with a battery, resistor, and LED. Measure voltage with a multimeter.",
      },
      {
        what: "Computer Architecture (CPU, Registers, Memory)",
        why: "To write efficient code, you must understand how the CPU executes instructions and how memory (Flash, SRAM) is organized.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Introduction to Computer Architecture", url: "https://www.youtube.com/watch?v=4Y_69InZ_As" },
        ],
        practice: "Identify the memory map of a microcontroller (like STM32 or AVR) from its datasheet.",
      },
      {
        what: "Microcontroller Basics (GPIO & Blinking LED)",
        why: "The 'Hello World' of hardware. Learning to configure General Purpose Input/Output pins is the first step to control.",
        time: "3 Days",
        prereqs: "Step 1, Step 3",
        resources: [
          { name: "STM32 GPIO Tutorial", url: "https://www.youtube.com/watch?v=be7_m_v_vEY" },
        ],
        practice: "Write code to blink an LED at a specific frequency (e.g., 1Hz) using a delay loop.",
      },
      {
        what: "Interrupts & Event Handling",
        why: "Interrupts allow the CPU to react to external events (like a button press) instantly without wasting time polling.",
        time: "4 Days",
        prereqs: "Step 4",
        resources: [
          { name: "Interrupts Explained", url: "https://www.youtube.com/watch?v=uV9_vMYz_xs" },
        ],
        practice: "Write a program that toggles an LED state only when a physical button is pressed, using an external interrupt.",
      },
      {
        what: "Timers & PWM (Pulse Width Modulation)",
        why: "Timers provide precise time intervals. PWM is used to control LED brightness, motor speed, and generate signals.",
        time: "1 Week",
        prereqs: "Step 4",
        resources: [
          { name: "Timers and Counters in MCUs", url: "https://www.youtube.com/watch?v=look-up-timers" },
        ],
        practice: "Use a timer interrupt to blink an LED accurately. Then, use PWM to fade an LED in and out.",
      },
      {
        what: "Communication Protocols I: UART",
        why: "UART is the simplest way to send data to a computer console for debugging and command control.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "UART Protocol Explained", url: "https://www.youtube.com/watch?v=sTHckUuxyH8" },
        ],
        practice: "Send 'Hello Console' from your MCU to your PC serial terminal (TeraTerm/PuTTY).",
      },
      {
        what: "Reading Datasheets Effectively",
        why: "The datasheet is the source of truth for every component. Learning to find register addresses and timing diagrams is vital.",
        time: "3 Days",
        prereqs: "None",
        resources: [
          { name: "How to Read a Datasheet (Ladyada)", url: "https://www.youtube.com/watch?v=sxu_vOfX9_0" },
        ],
        practice: "Find the maximum clock speed and the number of I2C peripherals available on an STM32F103 chip.",
      },
      {
        what: "Tooling: IDEs & Debuggers (GDB)",
        why: "Debugger hardware (ST-Link, J-Link) and GDB allow you to step through code line-by-line while it runs on hardware.",
        time: "4 Days",
        prereqs: "Step 1",
        resources: [
          { name: "Debugging Embedded Systems", url: "https://www.youtube.com/watch?v=id-debug-embedded" },
        ],
        practice: "Set a breakpoint in your code and inspect the value of a variable stored in RAM using an IDE.",
      },
      {
        what: "Bare-Metal Programming (No HAL)",
        why: "To understand what happens 'under the hood'. Writing code by direct register manipulation builds true mastery.",
        time: "1 Week",
        prereqs: "Step 8, Step 1",
        resources: [
          { name: "Bare Metal C Programming", url: "https://www.youtube.com/watch?v=look-up-bare-metal" },
        ],
        practice: "Blink an LED by writing directly to the memory-mapped addresses of the GPIO registers, without using any libraries.",
      },
    ],
  },
  {
    title: "Intermediate Stage: Protocols, RTOS & Sensors",
    level: "Intermediate",
    steps: [
      {
        what: "Communication Protocols II: I2C",
        why: "I2C is used to talk to most sensors (temperature, accelerometers). It uses only two wires.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "I2C Protocol Deep Dive", url: "https://www.youtube.com/watch?v=6IAkYpmA1DQ" },
        ],
        practice: "Read the temperature from an I2C sensor (like TMP102) and print it to the console.",
      },
      {
        what: "Communication Protocols III: SPI",
        why: "SPI is much faster than I2C. It's used for displays, SD cards, and high-speed memory.",
        time: "1 Week",
        prereqs: "Beginner Stage",
        resources: [
          { name: "SPI Protocol Explained", url: "https://www.youtube.com/watch?v=fvO6X906itw" },
        ],
        practice: "Display your name on a small OLED display using the SPI protocol.",
      },
      {
        what: "ADC & Analog Sensors",
        why: "The world is analog. Analog-to-Digital Converters (ADCs) allow the MCU to read voltages from sensors.",
        time: "5 Days",
        prereqs: "Electronics Basics",
        resources: [
          { name: "ADC Basics for MCUs", url: "https://www.youtube.com/watch?v=look-up-adc" },
        ],
        practice: "Use a potentiometer to control the blinking speed of an LED using the ADC.",
      },
      {
        what: "RTOS Fundamentals (FreeRTOS)",
        why: "Real-Time Operating Systems are used in complex apps to manage multiple tasks (e.g., reading sensors + updating screen).",
        time: "2 Weeks",
        prereqs: "Step 1, Step 5",
        resources: [
          { name: "FreeRTOS Tutorial (YouTube)", url: "https://www.youtube.com/playlist?list=PLPW886-8bbnyweE06iZ4Zis6bcZ6_Yks6" },
        ],
        practice: "Create two tasks in FreeRTOS: one to blink an LED and one to send data over UART simultaneously.",
      },
      {
        what: "RTOS: Semaphores & Mutexes",
        why: "To prevent 'Race Conditions' when multiple tasks try to access the same hardware resource (like UART) at once.",
        time: "1 Week",
        prereqs: "Step 14",
        resources: [
          { name: "Semaphores and Mutexes in RTOS", url: "https://www.youtube.com/watch?v=look-up-mutex" },
        ],
        practice: "Implement a Mutex to ensure that two tasks can print to the serial port without garbling the text.",
      },
      {
        what: "Direct Memory Access (DMA)",
        why: "DMA moves data between peripherals and memory without involving the CPU, significantly increasing performance.",
        time: "1 Week",
        prereqs: "Step 11, Step 12",
        resources: [
          { name: "DMA Explained", url: "https://www.youtube.com/watch?v=look-up-dma" },
        ],
        practice: "Use DMA to transfer a buffer of 1KB from memory to the UART peripheral.",
      },
      {
        what: "Low Power Optimization",
        why: "Battery-powered devices must sleep. Learn to use Sleep, Stop, and Standby modes effectively.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "Low Power Embedded Systems", url: "https://www.youtube.com/watch?v=id-low-power" },
        ],
        practice: "Measure current consumption of your MCU in 'Run' mode vs 'Deep Sleep' mode using a multimeter.",
      },
      {
        what: "Unit Testing for Firmware",
        why: "Firmware is hard to debug. Unit tests (using Unity or CMock) allow you to verify logic without physical hardware.",
        time: "1 Week",
        prereqs: "C Basics",
        resources: [
          { name: "Unit Testing for Embedded C", url: "https://www.throwtheswitch.org/unity" },
        ],
        practice: "Write a unit test for a simple mathematical function used in your firmware logic.",
      },
      {
        what: "ARM Cortex-M Architecture",
        why: "The industry standard for 32-bit MCUs. Learn about the Vector Table, NVIC, and Exception handling.",
        time: "1 Week",
        prereqs: "Step 3",
        resources: [
          { name: "The Definitive Guide to ARM Cortex-M", url: "https://www.amazon.com/Definitive-Guide-ARM-Cortex-M3-Cortex-M4-Processors/dp/0124080820" },
        ],
        practice: "Configure the Priority Grouping in the NVIC to handle multiple nested interrupts.",
      },
      {
        what: "Hardware Abstraction Layers (HAL) vs LL",
        why: "To write portable code. Learn when to use high-level libraries (HAL) and when to use Low-Level (LL) macros.",
        time: "4 Days",
        prereqs: "Step 10",
        resources: [
          { name: "Understanding STM32 HAL", url: "https://www.youtube.com/watch?v=look-up-hal" },
        ],
        practice: "Refactor a register-level GPIO code to use the official HAL library from the manufacturer.",
      },
    ],
  },
  {
    title: "Advanced Stage: Systems, Linux & Security",
    level: "Advanced",
    steps: [
      {
        what: "Embedded Linux (Yocto / Buildroot)",
        why: "For high-end devices (Gateways, Medical Displays). Learn to build custom Linux distributions for ARM.",
        time: "3 Weeks",
        prereqs: "Linux CLI basics",
        resources: [
          { name: "Embedded Linux Course (Free - Bootlin)", url: "https://bootlin.com/training/embedded-linux/" },
        ],
        practice: "Build a minimal Linux image for a Raspberry Pi using Buildroot.",
      },
      {
        what: "Linux Device Driver Development",
        why: "To allow the Linux kernel to interact with your custom hardware peripherals.",
        time: "3 Weeks",
        prereqs: "Step 21, Step 1",
        resources: [
          { name: "The Linux Kernel Module Programming Guide", url: "https://sysprog21.github.io/lkmpg/" },
        ],
        practice: "Write a simple 'Char Driver' that allows a user-space app to turn an LED on and off.",
      },
      {
        what: "Controller Area Network (CAN Bus)",
        why: "The standard protocol for automotive and industrial systems. Master message frames and filtering.",
        time: "1 Week",
        prereqs: "None",
        resources: [
          { name: "CAN Bus Explained", url: "https://www.youtube.com/watch?v=FqLDZ69AS8A" },
        ],
        practice: "Connect two MCUs via CAN and exchange status messages between them.",
      },
      {
        what: "Embedded Security: Secure Boot & TrustZone",
        why: "To protect devices from unauthorized firmware and keep user data safe. Essential for IoT devices.",
        time: "2 Weeks",
        prereqs: "Step 19",
        resources: [
          { name: "Introduction to Secure Boot", url: "https://www.youtube.com/watch?v=id-secure-boot" },
        ],
        practice: "Implement a digital signature check for your firmware image before running it.",
      },
      {
        what: "DSP for Embedded (Digital Signal Processing)",
        why: "To process audio, vibration, or sensor signals efficiently using CMSIS-DSP.",
        time: "2 Weeks",
        prereqs: "Calculus, Step 1",
        resources: [
          { name: "DSP Basics for Embedded", url: "https://www.youtube.com/watch?v=look-up-dsp" },
        ],
        practice: "Implement a low-pass filter to remove noise from an analog sensor reading.",
      },
      {
        what: "USB Protocol & HID Devices",
        why: "To build devices that interact directly with PCs as mice, keyboards, or custom peripherals.",
        time: "1 Week",
        prereqs: "Step 12",
        resources: [
          { name: "USB Explained for Embedded", url: "https://www.youtube.com/watch?v=look-up-usb" },
        ],
        practice: "Turn your MCU into a 'Macro Key' that types a string when a button is pressed.",
      },
      {
        what: "Wireless Stacks: BLE & Wi-Fi",
        why: "To connect your devices to the internet or smartphones. Learn GATT profiles and sockets.",
        time: "2 Weeks",
        prereqs: "Step 7",
        resources: [
          { name: "BLE fundamentals for iOS/Android", url: "https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/ug_bt_le_controller.html" },
        ],
        practice: "Send sensor data from your MCU to a smartphone app via Bluetooth Low Energy.",
      },
      {
        what: "CI/CD for Firmware (DevOps)",
        why: "Automate builds and testing using HIL (Hardware-In-The-Loop) to ensure code quality in teams.",
        time: "1 Week",
        prereqs: "Git basics",
        resources: [
          { name: "GitHub Actions for Embedded", url: "https://www.youtube.com/watch?v=id-ci-firmware" },
        ],
        practice: "Set up a GitHub Action that compiles your firmware automatically on every push.",
      },
      {
        what: "Safety Critical Systems (MISRA C)",
        why: "To write reliable code for automotive or medical sectors where failure isn't an option.",
        time: "1 Week",
        prereqs: "Step 1",
        resources: [
          { name: "Introduction to MISRA C", url: "https://www.misra.org.uk/" },
        ],
        practice: "Audit a previous project using a static analysis tool like 'cppcheck' for MISRA compliance.",
      },
      {
        what: "Project Management & Soft Skills",
        why: "Engineers must collaborate with hardware designers and product managers. Learn to explain technical trade-offs.",
        time: "Ongoing",
        prereqs: "None",
        resources: [],
        practice: "Write a clear technical specification for a new product feature.",
      },
    ],
  },
];

const projects = [
  { level: "Beginner", title: "Smart LED Controller", teaches: "GPIO, PWM, Buttons, and basic C logic.", tech: "Arduino or STM32" },
  { level: "Beginner", title: "Digital Clock with Alarm", teaches: "Timers, Interrupts, and 7-segment displays.", tech: "STM32, RTC" },
  { level: "Beginner", title: "UART Terminal Chat", teaches: "Serial communication, Buffers, and CLI interaction.", tech: "C, UART" },
  { level: "Intermediate", title: "IoT Weather Station", teaches: "I2C/SPI sensors, JSON, and Wi-Fi/ESP32.", tech: "ESP32, BME280" },
  { level: "Intermediate", title: "RTOS Multi-Tasking Robot", teaches: "Task scheduling, Semaphores, and Motor control.", tech: "FreeRTOS, PWM" },
  { level: "Intermediate", title: "Datalogger to SD Card", teaches: "File systems (FATFS), SPI, and power management.", tech: "STM32, SD Card" },
  { level: "Intermediate", title: "Gesture-based Volume Control", teaches: "ADCs, Analog processing, and HID over USB.", tech: "C, ADC, USB" },
  { level: "Advanced", title: "Embedded Linux Gateway", teaches: "Yocto, Kernel config, and networking stacks.", tech: "Raspberry Pi, Yocto" },
  { level: "Advanced", title: "Secure Firmware Bootloader", teaches: "Encryption, digital signatures, and Flash management.", tech: "C, Cryptography" },
  { level: "Advanced", title: "OBD-II Car Scanner", teaches: "CAN Bus, Automotive protocols, and Bluetooth.", tech: "C, CAN, BLE" },
];

const plans = [
  {
    title: "30-Day Fast Track: The Firmware Builder",
    description: "Focus on C and core MCU peripherals to build functional local devices.",
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
      "Days 41-60: FreeRTOS fundamentals and building the Multi-Tasking Robot.",
    ]
  },
  {
    title: "90-Day Mastery Plan: The Embedded Architect",
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
  "How does a CPU handle an Interrupt Service Routine (ISR)?",
  "Describe the boot process of a microcontroller.",
  "What is the difference between I2C and SPI? When would you use each?",
  "What are 'Volatile' and 'Static' keywords in C and why are they important in embedded?",
  "Explain the LIFO and FIFO principles in the context of Stacks and Queues.",
  "How does an RTOS scheduler work? What is priority inversion?",
  "What is a watchdog timer and how do you use it?",
  "Describe the difference between Little-Endian and Big-Endian.",
  "How do you debug a hard fault on an ARM Cortex-M processor?",
];

const codingQuestions = [
  { question: "Write a C function to reverse the bits of a byte.", topic: "Bitwise Ops" },
  { question: "Implement a circular buffer (ring buffer) in C.", topic: "Data Structures" },
  { question: "Write code to set the 5th bit of a 32-bit register without changing others.", topic: "Bitwise Ops" },
  { question: "How would you implement a simple debouncing logic for a button in an ISR?", topic: "Interrupts" },
];

const mistakes = [
  "Hardcoding register addresses: Use manufacturer-provided header files instead.",
  "Ignoring warnings: Embedded compilers often point to subtle memory bugs via warnings.",
  "Blocking ISRs: Keep your Interrupt Service Routines as short as possible.",
  "Not using 'volatile' for variables changed in interrupts - this causes cache issues.",
  "Neglecting Power Management: Building devices that drain batteries in hours.",
  "Insufficient Debouncing: Buttons bounce; software or hardware filters are a must.",
  "Poor Documentation: Not commenting why a specific register value was chosen.",
  "Relying on 'printf' for debugging time-sensitive tasks (it's slow).",
  "Not reading the 'Errata' section of the datasheet.",
  "Tutorial hopping: Buying 10 boards and never finishing one project.",
];

export default function EmbeddedDeveloperRoadmapPage() {
  return (
    <AuthGuard>
      <div className="container mx-auto py-10 space-y-12">
        <header className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            Embedded Systems Developer Roadmap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your definitive journey to mastering the interface between hardware and software. From silicon basics to real-time operating systems and high-performance device drivers.
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
              <CardDescription>Follow these {stage.steps.length} steps to progress from {stage.level}.</CardDescription>
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
            <CardDescription>Build these 10 projects to showcase your expertise as a professional Embedded Systems Engineer.</CardDescription>
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
                    <CircuitBoard className="h-3 w-3"/> {p.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3"><GraduationCap className="h-8 w-8 text-primary"/>Learning Plans</CardTitle>
            <CardDescription>Pick a timeline that matches your availability and hardware access.</CardDescription>
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
            <CardDescription>Expert guidance to help you land your dream hardware-software integration role.</CardDescription>
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
              <h3 className="font-bold text-xl text-center">Resume & Profile Optimization</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="h-5 w-5 text-primary"/> Essential Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Embedded C', 'RTOS', 'Microcontrollers', 'ARM Cortex-M', 'Device Drivers', 'Linux Kernel', 'UART/I2C/SPI', 'CAN Bus', 'Oscilloscopes', 'Unit Testing', 'MISRA C', 'Low Power', 'DMA'].map(kw => <Badge key={kw} variant="secondary" className="px-3 py-1">{kw}</Badge>)}
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-2 border-primary/10">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Globe className="h-5 w-5 text-primary"/> Showcase Like a Pro</h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Provide clear high-quality photos of your hardware projects in GitHub.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Include state machines or sequence diagrams in your README files.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5"/> Explain how you handled memory management and power consumption.</li>
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
          <h2 className="text-4xl font-black tracking-tight mb-6">Build the Intelligence Inside</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
            Embedded systems are the hidden brains of the modern world. Mastering this field gives you the unique ability to touch hardware and move it with your code. Stay consistent, read the manual (twice!), and never stop building. The world runs on the code you're about to write. You've got this!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <Link href="/projects">
                Start Building Hardware
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
