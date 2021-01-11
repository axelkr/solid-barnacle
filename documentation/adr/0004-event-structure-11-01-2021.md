# Structure of Event used for communicating between frontend and backend

* Status: accepted

## Context and Problem Statement
Events are used to communicate between frontend and backend. What should be the structure of the events being communicated?

## Decision Drivers

* Extensibility for typical patterns within event sourcing (separate by topics, snapshots in frontend)
* Model generic parts and domain specific parts of an event. This helps understand how to apply event sourcing patterns later on.

## Decision Outcome
Events are domain-specific. This enables the backend to handle domain-specific queries. All types of events share the same data structure, otherwise the backend has to be modified each time a new event type is introduced. This constrains which domain-specific queries the backend can do.

Topics are explicitly modeled in the generic event. This enables separating data within one backend. Objects within the same topic may be connected.

The snapshot requires the frontend to know from where to replay events on. This is provided by each event carrying an identifier and the backend knowing the order of identifiers.

An event occurs at some point. To avoid problems with keeping time between frontends in sync, this time is when the event was stored in the backend.

### Generic event
* Topic : GUID
* Time : DateTime (when event was stored in backend)
* Id : Int (strictly increases within topic)
* Type : String (to identify category of event, e.g. "CreateObject")

### Object event
* extends Generic event
* Object : GUID (non-null)
* Payload: JSON
