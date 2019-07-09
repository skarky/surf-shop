	git init
	ls -a
	git status
	git add <file>
	git add *.html
	git add . //add all files
	git add -A 				dodaj sve fajlove i skrivene fajlove 
	git commit -m "poruka"
	git log
	git reset HEAD <file> //brisi sve fajlove iz stagging area
	git branch 
	git chackout -b feature 1 //novi branch
	git chackout <branch name> //selektovati branch
	git merge <project> //spajanje projekta
	git brache -d <name of branch>


	git remote add origin https://github.com/skarky/surf-shop.git
	git push -u origin master


#WORKING DIRECTORY
-Area where all our files directory and changig living all the time

#Staging area //git add <file>
-Files and direcoryis that we explicitly add to the stagging area

# Git repository
-Where all our snaupshuts are stored

//BRANCH je dobra stva kada zelimo da mijenjamo coode a ne zelimo glavni projekat dirati

		 /0-----0-----0\ 
		/	  BRANCH	\MERGE
----0-----0-----0-----0--0----0---