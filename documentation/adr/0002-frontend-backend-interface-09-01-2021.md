# How do frontend and backend interact with each other?

* Status: accepted

## Context and Problem Statement

While the frontend displays stuff and the backend stores stuff, both have to communicate with each other.

## Decision Drivers

* New for me: I want to apply a technique unknown to me so I understand the ins and outs of it. 
* Established approach: The technique should already enjoy widespread adoption, so tools and knowledge exists out there.
* Can scale into a client-server setup: Initially, data will be stored by the application itself. However, the technique should be able to grow into a fully-fledged architecture where frontend and backend enjoy different deployments.

## Considered Options

* REST
* GraphQL
* Events

## Decision Outcome

Chosen option: "Events" because that is most unknown to me. I've done "REST" several times, so using that would be a chore. "GraphQL" would be interesting as well but "Events" poses more challenges.