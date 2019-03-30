FN="console"

all:
	gcloud functions deploy $(FN) --runtime nodejs8 --trigger-http 

del:
	gcloud functions delete $(FN)

list:
	gcloud functions list 
