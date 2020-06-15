from django.db import models



# Create your models here.

# api/models.py


class Courses(models.Model):
	code = models.IntegerField(primary_key=True)
	name = models.CharField(max_length=100)
	category = models.CharField(max_length=100)
#	paths = []

#def __init__(self,name,cate,code,paths):
def __init__(self,code,name,cate):
	self.code = code
	self.name = name
	self.category = cate
#	self.paths = paths

def __str__(self):
        return '%d %s %s' % (self.code, self.name, self.category)


class Pathways(models.Model):
	#will use the auto primary key
	name = models.CharField(max_length=100)
	desc = models.TextField()
	classes = models.ManyToManyField(Courses)

def __init__(self,name,desc):
	self.name = name
	self.desc = desc

def __init__(self,name,desc,inqu):
	self.name = name
	self.desc = desc
	self.save()
	for x in inqu:
		self.classes.add(x)
	self.save()

def __str__(self): #think of this as a print for the entry
        return '%s %s' % (self.name, self.desc)

