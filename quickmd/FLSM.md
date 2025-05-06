# Understanding FLSM and Implementation in Packet Tracer

## What is FLSM?

Fixed Length Subnet Mask (FLSM) is a subnet deployment strategy where a network is divided into multiple subnets of identical size[3][4]. Also known as classful subnetting or traditional subnetting, FLSM creates equal-sized subnets that all use the same subnet mask[7][8].

FLSM is ideal when you have networks with similar host requirements. For example, if you have four departments each needing 50 hosts, FLSM would be appropriate[5].

## FLSM vs VLSM Comparison

| FLSM | VLSM |
| --- | --- |
| Equal subnet sizes | Variable subnet sizes |
| Same subnet mask for all subnets | Different subnet masks |
| Equal number of hosts per subnet | Variable number of hosts |
| Easier to configure | More complex |
| More IP address wastage | Less IP address wastage |
| Supports both classful and classless routing | Supports only classless routing |

## FLSM Implementation in Packet Tracer

Here's how to implement FLSM in Packet Tracer:

### Step 1: Plan Your Subnetting
1. Identify your base network (e.g., 192.168.1.0/24)
2. Determine how many equal subnets you need
3. Calculate the appropriate subnet mask

### Step 2: Configure Router Interfaces
```
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.192
Router(config-if)# no shutdown
Router(config-if)# exit
Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 192.168.1.65 255.255.255.192
Router(config-if)# no shutdown
```

### Step 3: Configure DHCP (Optional)
```
Router(config)# ip dhcp pool IT
Router(dhcp-config)# network 192.168.1.0 255.255.255.192
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 192.168.1.50
Router(dhcp-config)# exit
Router(config)# ip dhcp pool Finance
Router(dhcp-config)# network 192.168.1.64 255.255.255.192
Router(dhcp-config)# default-router 192.168.1.65
Router(dhcp-config)# dns-server 192.168.1.50
```

### Step 4: Configure Static Routing (Multiple Routers)
```
Router(config)# ip route 192.168.10.0 255.255.255.0 192.168.10.97
```

### Step 5: Verify Configuration
```
Router# show ip route
```

## FLSM Example

For a network 192.168.1.0/24 divided into 4 equal subnets:
- Each subnet gets 64 addresses (256 ÷ 4)
- Subnet mask becomes 255.255.255.192 (/26)
- Resulting networks:
  - 192.168.1.0/26 (usable: 192.168.1.1 - 192.168.1.62)
  - 192.168.1.64/26 (usable: 192.168.1.65 - 192.168.1.126)
  - 192.168.1.128/26 (usable: 192.168.1.129 - 192.168.1.190)
  - 192.168.1.192/26 (usable: 192.168.1.193 - 192.168.1.254)

The main disadvantage of FLSM is IP address wastage. In our example, if one department only needs 10 hosts but gets allocated 62 usable addresses, 52 addresses are wasted[5][6].

