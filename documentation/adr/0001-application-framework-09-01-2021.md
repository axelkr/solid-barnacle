# Frameworks to use for structuring application

* Status: accepted

## Context and Problem Statement

I use a framework in order to structure the application. It also allows me to focus on the interesting bits.

## Decision Drivers

* Support: Framework should continue to exist in the foreseeable future; Framework should be used be a wide audience so my questions have already been asked.
* New for me: I want to get to know a new framework.
* Portability: Can be developed and deployed both on Linux and Windows machines.
* Availability of framework for application parts: In order to provide features later on, suitable frameworks should exist (UI framework, chart display, storage).

## Considered Options

* .NET MUAI / Xamarin
* Electron
* Container 

## Decision Outcome

Chosen option: "Electron". ".NET MUAI / Xamarin" doesn't seem to provide an established framework for displaying charts. Moreover, the focus of ".NET MUAI / Xamarin" is on applications for mobile devices, which is of no interest to me. "Container" would be a cool technology to learn about, but it would be a distraction as it's about deployment. "Electron" hosts a Node.JS stack, which is not entirely new to me, but it crosses of the other decision drivers.