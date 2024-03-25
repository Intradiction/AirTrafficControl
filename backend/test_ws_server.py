import time

import asyncio
from websockets.server import serve

async def echo(websocket):
    # async for message in websocket:
    #     await websocket.send(message)
   
    await websocket.send("hello from ws server")
    time.sleep(1)

async def main():
    async with serve(echo, "localhost", 8765):
        await asyncio.Future()  # run forever

asyncio.run(main())