---
title: E-ink panel
summary: A 13.3-inch colour e-paper panel in a picture frame, showing my projects and calendar.
date: 2026-10-04
status: In progress
cover: ""
gallery: []
tags:
  - e-paper
  - ESP32
  - Raspberry Pi
  - home server
specs:
  - label: Display
    value: Pimoroni Inky Impression 13.3" (E Ink Spectra 6, 1600 × 1200)
  - label: Rendering
    value: On momo, as a finished image
  - label: Driver
    value: Raspberry Pi 3B for testing; Seeed XIAO ESP32-S3 next
  - label: Goals
    value: Low power, a shallow frame, months per charge
links: []
draft: true
---
The panel wakes on a schedule, fetches a finished image from momo and goes back to sleep. Different screens for different times of day: a morning summary, photos while I'm at work, a reminder or two in the evening.

First milestone: a test image from the Pi 3B.
