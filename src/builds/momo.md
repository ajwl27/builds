---
title: momo
summary: A Dell Wyse 5070 thin client turned into an always-on home server.
date: 2026-10-03
status: In progress
cover: ""
gallery: []
tags:
  - Linux
  - home server
  - self-hosting
  - AI
specs:
  - label: Hardware
    value: Dell Wyse 5070 thin client
  - label: Storage
    value: 1 TB SSD
  - label: OS
    value: Debian 13, headless
  - label: Services
    value: Samba file share, Docker, Home Assistant, Claude Code via Remote Control
links: []
draft: true
---
momo sat unused until a new SSD went in. It now runs Debian 13 headless by the router: it shares files with my PC, runs Home Assistant in Docker, and hosts a persistent Claude Code session I can reach from my phone.

Next: backups, and serving the data for the e-ink panel.
