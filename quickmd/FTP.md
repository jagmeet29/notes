# Understanding FTP and Implementing It in Packet Tracer

## What is FTP?

File Transfer Protocol (FTP) is a standard network protocol used for transmitting files between computers over TCP/IP connections[1][3]. It operates using a client-server architecture where:

- The client machine has an FTP client installed
- The server runs FTP services to handle file transfers
- Users can upload, download, delete, rename, move and copy files on a server[3]

FTP relies on two communication channels:
- A command channel for controlling the conversation
- A data channel for transmitting file content[3]

## How FTP Works

FTP sessions can operate in two modes:

- **Active mode**: After a client initiates a session, the server creates a data connection back to the client and begins transferring data
- **Passive mode**: The server uses the command channel to send the client information needed to open a data channel (better for working through firewalls)[3]

## Implementing FTP in Packet Tracer

Let's create a simple FTP implementation in Packet Tracer:

### Step 1: Build the Network Topology
- Add two PCs (as clients)
- Add a server (will be the FTP server)
- Add a switch to connect all devices[5]

### Step 2: Configure IP Addresses
- **FTP Server**: 192.168.1.100/24
- **Client PC1**: 192.168.1.2/24
- **Client PC2**: 192.168.1.3/24[5]

Make sure all devices have the proper subnet mask (255.255.255.0).

### Step 3: Configure the FTP Server
1. Click on the server
2. Go to Services > FTP
3. Turn on the FTP service
4. Create a user:
   - Default user is cisco/cisco (has all permissions)
   - Or create your own user with specific permissions (write, read, delete, rename, list)[5]

### Step 4: Testing the FTP Connection

From a client PC:
1. Open Command Prompt
2. Type: `ftp 192.168.1.100`
3. Enter username and password when prompted[2][5]

### Step 5: Using FTP Commands

Once connected, you can:
- **Upload a file**: `put filename.txt`
- **Download a file**: `get filename.txt`
- **List all files**: `dir`
- **Exit FTP**: `quit`[5]

To create a test file, use the text editor in Packet Tracer, save the file, then use the FTP commands to transfer it between machines.

### Step 6: Verify the File Transfer

After transferring files, check if they've been successfully sent by opening the destination location:
- For uploads: Check the FTP server's files section
- For downloads: Use the text editor on the client PC to open the downloaded file[5]

Remember that FTP doesn't encrypt data during transmission, so sensitive information can be intercepted[2]. For secure file transfers, FTPS (FTP Secure) or SFTP (SSH File Transfer Protocol) should be used instead.

Would you like me to explain more about using specific FTP commands or setting up more advanced FTP configurations in Packet Tracer?
