import pymongo

def init():
	cli = pymongo.MongoClient("mongodb://localhost:27017/") # subject to change on deployment

	db = cli["db"] 

	return db # database

def get_inquiries_col(db):
	return db["inquiries"] # inquiries collection

def get_pathways_col(db):
	return db["pathways"] # pathways collection

# use col.find() to get all documents in a collection

def get_pathways(inquiry):
	list_pathways = inquiry["pathways"]
	col = get_pathways_col()

	rtrn = []

	for pathway_id in list_pathways:
		query = {"pathway_id" : pathway_id}
		rtrn.append(col.find_one(query))

	return rtrn

def get_inquiries(pathway):
	list_pathways = pathway["inquiries"]
	col = get_inquiries_col()

	rtrn = []

	for inquiry_id in list_inquiries:
		query = {"inquries_id" : inquiry_id}
		rtrn.append(col.find_one(query))

	return rtrn