<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# tell me all about  VLSM in simple terms

Variable Length Subnet Mask (VLSM) is a networking technique that allows dividing an IP network into subnets of different sizes, which makes IP address allocation more efficient.

## What is VLSM?

VLSM is a subnet design strategy that allows all subnet masks to have variable sizes[^1][^3]. It enables network administrators to create subnets with different subnet masks, unlike traditional approaches where all subnets must be the same size[^5].

Think of it like dividing a piece of land into plots of different sizes based on what each person needs, rather than forcing everyone to have the same size plot regardless of their requirements.

## Why Use VLSM?

VLSM helps solve a common problem in networking - wasted IP addresses. With traditional Fixed Length Subnet Mask (FLSM):

- All subnets must be the same size
- Small networks get assigned more IP addresses than they need
- This wastes valuable IP address space[^4][^5]

For example, if a network has one location with 100 computers and another with just 10, VLSM allows you to give the larger location more addresses and the smaller location fewer addresses[^4].

## VLSM vs. Fixed Length Subnet Mask

| VLSM | FLSM |
| :-- | :-- |
| Creates differently sized subnets | Creates equally sized subnets |
| Number of hosts varies per subnet | Same number of hosts in each subnet |
| Uses different subnet masks | Uses the same subnet mask for all subnets |
| Minimizes IP address waste | Often wastes IP addresses |
| More complex to implement | Simpler to implement |

## Simple Example

Imagine you have a network address 192.168.1.0/24 (providing 256 addresses) and need to create:

- One subnet for 100 devices
- One subnet for 50 devices
- One subnet for 25 devices
- One subnet for 10 devices

With VLSM, you can create appropriately sized subnets for each need instead of creating four equal subnets of 64 addresses each (which would waste addresses in the smaller networks)[^5].

VLSM is supported by modern routing protocols like OSPF, EIGRP, BGP, and RIP version 2[^2][^3].

# VLSM Example Implementation

VLSM (Variable Length Subnet Mask) allows you to create subnets of different sizes based on actual requirements, which helps optimize IP address usage. Let me walk you through a practical example:

## Step 1: Identify Host Requirements

First, let's arrange network segments by host requirements (from largest to smallest):

- HQ LAN: 50 hosts
- BRANCH 1: 30 hosts
- BRANCH 2: 20 hosts
- WAN Links (3 connections): 2 hosts each[4]

## Step 2: Available Address Space

Let's say we have the subnet 192.168.10.0/24 (a Class C network with 256 addresses) to divide.

## Step 3: Subnet the Largest Network First

For HQ LAN (50 hosts):
- Required hosts: 50
- Add 2 (network + broadcast): 52 total addresses needed
- We need 6 host bits (2^6 - 2 = 62 hosts)
- Subnet mask: /26 (255.255.255.192)
- Network address: 192.168.10.0
- Broadcast address: 192.168.10.63
- Usable range: 192.168.10.1 to 192.168.10.62[4]

## Step 4: Next Largest Network

For BRANCH 1 (30 hosts):
- Required hosts: 30
- Add 2: 32 total addresses needed
- We need 5 host bits (2^5 - 2 = 30 hosts)
- Subnet mask: /27 (255.255.255.224)
- Network address: 192.168.10.64
- Broadcast address: 192.168.10.95
- Usable range: 192.168.10.65 to 192.168.10.94[4][5]

## Step 5: Continue with Remaining Networks

For BRANCH 2 (20 hosts):
- Required hosts: 20
- Add 2: 22 total addresses needed
- We need 5 host bits (2^5 - 2 = 30 hosts)
- Subnet mask: /27 (255.255.255.224)
- Network address: 192.168.10.96
- Broadcast address: 192.168.10.127
- Usable range: 192.168.10.97 to 192.168.10.126[1][5]

## Step 6: WAN Links

For each WAN link (2 hosts each):
- Required hosts: 2
- Add 2: 4 total addresses needed
- We need 2 host bits (2^2 - 2 = 2 hosts)
- Subnet mask: /30 (255.255.255.252)

WAN Link 1:
- Network: 192.168.10.128/30
- Usable: 192.168.10.129 to 192.168.10.130[1][4]

WAN Link 2:
- Network: 192.168.10.132/30
- Usable: 192.168.10.133 to 192.168.10.134[4]

WAN Link 3:
- Network: 192.168.10.136/30
- Usable: 192.168.10.137 to 192.168.10.138[4]

This VLSM implementation uses different subnet masks (/26, /27, and /30) based on actual requirements, making it much more efficient than FLSM which would force all subnets to be the same size.

