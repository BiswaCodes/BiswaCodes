import numpy

print("enter the numbers : \n")
num_List = [int(x) for x in input().split()]
print(num_List)

#sort the collection
num_List.sort()
print(num_List)

lengthOfList = len(num_List)
minIndex = 0
maxIndex = lengthOfList-1

#decalre an empty where to store the values
#numpy ensures fixed lenth array which length can not be altered
out_Result = numpy.empty(lengthOfList, dtype=int)

i = 0 #counter for resulting array index
while(minIndex < maxIndex):
    out_Result[i] = num_List[maxIndex]
    i+=1
    maxIndex-=1
    out_Result[i] = num_List[minIndex]
    i+=1
    minIndex+=1
if(lengthOfList % 2 !=0):
    out_Result[i] = num_List[minIndex]

print(out_Result)