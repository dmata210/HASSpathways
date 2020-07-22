from django.db import models



# Create your models here.

# api/models.py


class Courses(models.Model):
	code = models.IntegerField(primary_key=True)
	name = models.CharField(max_length=100)
	category = models.CharField(max_length=100)

	Pathways = models.ManyToManyField('Pathways',blank = False)

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


	class_1 = models.ForeignKey(Courses,on_delete = models.PROTECT, null = True,blank = True,related_name='class1')
	class_2 = models.ForeignKey(Courses,on_delete = models.PROTECT, null = True,blank = True,related_name='class2')
	class_3 = models.ForeignKey(Courses,on_delete = models.PROTECT,null = True,blank = True,related_name='class3')

def __init__(self,name,desc):
	self.name = name
	self.desc = desc

def __init__(self,name,desc,inqu,class2,class3):
	self.name = name
	self.desc = desc
	self.save()
	for x in inqu:
		self.class_1.add(x)
	self.save()
	for x in class2:
		self.class_2.add(x)
	self.save()
	for x in class2:
		self.class_3.add(x)
	self.save()


def __str__(self): #think of this as a print for the entry
        return '%s %s' % (self.name, self.desc)

