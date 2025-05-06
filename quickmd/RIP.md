# Implementing Distance Vector Routing Using RIP

RIP (Routing Information Protocol) is one of the oldest and simplest distance vector routing protocols. It determines packet paths based on hop count - the number of routers between source and destination.

## How Distance Vector Routing Works

Distance vector protocols operate on a "routing by rumor" principle:
- Routers initially only know about their directly connected interfaces
- Routers exchange routing information with neighbors
- They build routing tables based on information received from neighbors
- RIP uses hop count as its metric (lower is better)[1][3]

## RIP Characteristics

- Maximum hop count is 15 (16 means unreachable), limiting RIP to small networks[3]
- Updates routing tables by broadcasting every 30 seconds[2][3]
- Runs with Administrative Distance (AD) of 120 on port 520[3]
- Two versions: RIPv1 (classful) and RIPv2 (classless - supports VLSM)[5]

## Implementing RIP (Configuration Steps)

Setting up RIP is straightforward and requires just two main steps:

1. **Enable RIP routing protocol:**
   ```
   Router(config)#router rip
   ```

2. **Specify networks to advertise:**
   ```
   Router(config-router)# network [network-address]
   ```

Only directly connected networks need to be specified in the configuration.[2]

## Sample Configuration

For a router with these connections:
- Connected to network 10.0.0.0/8
- Serial connections to other routers (192.168.1.252/30 and 192.168.1.248/30)

The configuration would be:
```
Router(config)#router rip
Router(config-router)# network 10.0.0.0
Router(config-router)# network 192.168.1.252
Router(config-router)# network 192.168.1.248
```

Once configured, RIP automatically manages routes between networks and provides failover if a link goes down by rerouting traffic through alternate paths.[2]

## Additional Configuration Commands

- `Router(config-router)#version 2` - Enable RIPv2 (classless routing)
- `Router(config-router)#no auto-summary` - Disable automatic network summarization
- `Router(config-router)#passive-interface [interface]` - Prevent RIP updates on specified interface
- `Router#show ip rip database` - Display RIP routing database[2]
