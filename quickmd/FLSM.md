# Fixed Length Subnet Mask (FLSM) Explained

## What is FLSM?

FLSM (Fixed Length Subnet Mask) is a subnetting technique where all subnets have the exact same size. When you divide a network using FLSM, each subnet has:

- Equal number of hosts
- The same subnet mask
- The same amount of available IP addresses[1][4]

FLSM is also known as classful subnetting or traditional subnetting[3].

## FLSM vs VLSM Comparison

| FLSM | VLSM |
| --- | --- |
| Equal subnet sizes | Variable subnet sizes |
| Same subnet mask for all subnets | Different subnet masks |
| Equal number of hosts per subnet | Variable number of hosts |
| Easier to configure | More complex |
| More IP address wastage | Less IP address wastage |
| Supports both classful and classless routing | Supports only classless routing |


## FLSM Calculation Process

To calculate FLSM subnetting:

1. **Identify requirements**: Determine how many subnets you need
2. **Determine bits to borrow**: Use the formula 2^s ≥ (required subnets), where s = bits borrowed
3. **Calculate subnet mask**: Add the borrowed bits to the default subnet mask
4. **Calculate hosts per subnet**: 2^h - 2, where h = remaining host bits
5. **Determine subnet ranges**: Calculate each subnet's network ID, broadcast address, and usable range

## Example of FLSM Calculation

Let's divide 192.168.10.0/24 into 4 subnets:

1. **Determine bits to borrow**: 
   - 2^s ≥ 4, so s = 2 bits

2. **Calculate new subnet mask**:
   - Original: 255.255.255.0 (/24)
   - Borrow 2 bits: 255.255.255.192 (/26)[4]

3. **Hosts per subnet**:
   - 2^6 - 2 = 62 hosts per subnet[2]

4. **Subnet ranges**:
   - Subnet 1: 192.168.10.0/26 (0-63)
   - Subnet 2: 192.168.10.64/26 (64-127)
   - Subnet 3: 192.168.10.128/26 (128-191)
   - Subnet 4: 192.168.10.192/26 (192-255)[4]


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

