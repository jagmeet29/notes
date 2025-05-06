# Understanding Link State Routing and OSPF

## What is Link State Routing?

Link state routing is one of the two main classes of routing protocols used in packet-switching networks (the other being distance-vector routing)[1]. In link state routing:

- Each router builds a complete "map" of the network's connectivity[1]
- Routers share information only about their direct connections[3]
- Each router independently calculates the best path to every destination[1]
- Routers react faster to network changes than distance vector protocols[3]
- More router resources are used since more information is processed[3]

Think of link state routing like each router having a complete road map of the city, allowing it to calculate the best route independently.

## Introduction to OSPF

Open Shortest Path First (OSPF) is the most common implementation of link state routing. It's an Interior Gateway Protocol (IGP) designed for use within a single autonomous system[2][3].

**Key OSPF Features:**
- Uses Dijkstra's Shortest Path First algorithm to calculate best routes[3]
- Classless routing protocol that supports VLSM and CIDR[2]
- Uses only interface cost as its metric parameter[2]
- Administrative distance of 110 by default[2]
- Uses multicast addresses 224.0.0.5 and 224.0.0.6 for updates[2]

## How OSPF Works

OSPF operates through a three-step process:

1. **Neighbor Discovery:** Routers identify and establish relationships with other routers on the same network segment[3]

2. **Database Exchange:** Routers exchange Link State Advertisements (LSAs) to build identical Link State Databases (LSDB)[3][4]

3. **Route Calculation:** Each router independently runs the SPF algorithm to calculate the best routes to each destination[3][4]

## OSPF Router States

Routers in OSPF progress through seven states:
- **Down:** Initial state, no Hello packets received[3]
- **INIT:** Hello packets received from other routers[3]
- **2WAY:** Bidirectional communication established[3]
- **Exstart:** Master/slave relationship determined (higher router ID becomes master)[3]
- **Exchange:** Database Description packets exchanged[3]
- **Loading:** LSAs exchanged[3]
- **Full:** All information synchronized, actual routing begins[3]

## OSPF Network Design

OSPF networks can be organized into areas to improve efficiency:
- Networks are divided into logical areas[4]
- All areas must connect to Area 0 (backbone area)[4]
- Area Border Routers (ABRs) connect different areas[4]
- Route summarization can occur between areas[4]

OSPF stores information in three tables:
- **Neighbor table:** Information about OSPF neighbors[2]
- **Topology table:** Complete network topology structure[2]
- **Routing table:** Best calculated routes[2]

# Commands
```
en
config t
router ospf [process_ID]
network [IP_address] [wildcard_mask] area [area-id]
exit

```

There is a new area between 2 routers
