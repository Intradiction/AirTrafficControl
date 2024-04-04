import queue
Queue distant = new Queue(maxsize = 20)
Queue overhead = new Queue( maxsize = 10)
Queue runway = new Queue( maxsize = 3)
Queue gate = new Queue( maxsize = 5)


def distant_to_overhead():

	if not distant.empty():
		while(overhead.full()):
			print("Overhead airspace is full")
			time.sleep(3)
		if not overhead.full():
			enteringFlight = distant.pop()
			overhead.push(enteringFlight)
			distantSem.release()
			print(f'Flight number {enteringFlight.id} is entering overhead airspace')
		else:
			print("Error occurred")
	else:
		print("No incoming flights")

def overhead_to_distant():

	if not overhead.empty():
		while(distant.full()):
			print("distant airspace is full")
			time.sleep(3)
		if not distant.full():
			departingFlight = overhead.pop()
			distant.push(departingFlight)
			overheadSem.release()
			print(f'Flight number {enteringFlight.id} is departing overhead airspace')
		else:
			print("Error occurred")
	else:
		print("No flights in overhead")

def overhead_to_runway():
	if not overhead.empty():
		while(runway.full()):
			print("runways are full")
			time.sleep(3)
		if not runway.full():
			enteringFlight = overhead.pop()
			overhead.push(enteringFlight)
			print(f'Flight number {enteringFlight.id} is entering overhead airspace')
		else:
			print("Error occurred")
	else:
		print("No flights in overhead airspace")

def runway_to_overhead():
	if not runway.empty():
		while(overhead.full()):
			print("Overhead airspace is full")
			time.sleep(3)
		if not overhead.full():
			departingFlight = runway.pop()
			overhead.push(departingFlight)
			print(f'Flight number {enteringFlight.id} is departing runway')
		else:
			print("Error occurred")
	else:
		print("No flights on runways")


def runway_to_gate():
	if not runway.empty():
		while(gate.full()):
			print("Gates are full")
			time.sleep(3)
		if not gate.full():
			enteringFlight = runway.pop()
			gate.push(enteringFlight)
			print(f'Flight number {enteringFlight.id} is entering overhead airspace')
		else:
			print("Error occurred")
	else:
		print("Flights on runway")

def gate_to_runway():
	if not gate.empty():
		while(runway.full()):
			print("Runways are full")
			time.sleep(3)
		if not runway.full():
			departingFlight = gate.pop()
			runway.push(departingFlight)
			print(f'Flight number {enteringFlight.id} is departing gate')
		else:
			print("Error occurred")
	else:
		print("No flights in gates")