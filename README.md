poverty_line
============

##India poverty line project 

###Feb 15, 2016: Video splash || tal
**Dev Notes:**
cd into your fork

```
git checkout master
git pull origin master
git checkout -b your-branch
```
do work in your branch
```
git checkout master
git merge your-branch
git push origin master
```
(i think)

###Feb 3, 2016: Basic sorting functionality working || tal

**Visual Notes:**
- Let's chat about design, the images are small now, but the functionality works.

**Dev Notes:**
- Renamed CSV headers (see data file)
- Created js file with json from csv using converter (household_data.js)
	encapsulate the json within the 'household_data' variable
- Make sure rent numbers do not contain commas or quotes in CSV
- Run the node script: ```node homesToJSON``` in the root dir to generate a json of images from folders in assets
- "images_data.js" will now be placed in the data directory encapsulated within "household_images"
- Reduce image file size for faster load

###Feb 3, 2016: New prototype commits moving forward || ERW



