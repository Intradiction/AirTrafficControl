class Flight:
	def __init__(self, dest, source, end_time, start_time, pilot_id, aircraft_id, start_gate_id, end_gate_id, runway_id, location):
		self.dest = dest
		self.source = source 
		self.end_time = end_time
		self.start_time = start_time
		self.pilot_id = pilot_id
		self.aircraft_id = aircraft_id
		self.start_gate_id = start_gate_id
		self.end_gate_id = end_gate_id
		self.runway_id = runway_id
		self.location = location
		
	def __str__(self):
		return f"Flight Destination: {self.dest}, Source: {self.source}, End Time: {self.end_time}, Start Time: {self.start_time}, Pilot ID: {self.pilot_id}, Aircraft ID: {self.aircraft_id}, Start Gate ID: {self.start_gate_id}, End Gate ID: {self.end_gate_id}, Runway ID: {self.runway_id}, Location: {self.location}"
		
class Plane:
	def __init__(self, id, status, capacity=100, weight=100, planeType='Boeing747', pilot_id=123):
		self.id = id
		self.status = status
		self.capacity = capacity
		self.weight = weight
		self.type = planeType
		self.pilot_id = pilot_id
    
	def __str__(self):
		return f"Plane ID: {self.id}, Status: {self.status}, Capacity: {self.capacity}, Weight: {self.weight}, Type: {self.type}, Pilot ID: {self.pilot_id}"