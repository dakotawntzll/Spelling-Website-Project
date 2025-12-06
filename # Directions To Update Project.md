Preparation Steps
	1. Copy and Paste Folder to a new folder and rename folder to new project name
		- Note: Make sure when you rename it, you use "-" instead of spaces
	2. Delete this folder
		- .git

Make New Github Desktop Repo
	1. In Github Desktop go to
		- File -> Add Local Repository
		- It should say "You need to make the repo first"
		- Make the new repo

Steps to add back React Files
	1. Open new project in visual studio code
	2. In VS Code go to
		- Terminal -> New Terminal
	3. Type this into terminal to create new package.json file
		- npm init -y
	4. Type this into terminal to Reinstall Vite + React dependencies
		- npm install react react-dom vite @vitejs/plugin-react
	5. If you get an error like “missing script: dev,” add this line to package.json (under "scripts")
		-   "dev": "vite",
			"build": "vite build",
			"preview": "vite preview"
	6. Type this into terminal to run website
		- npm run dev


Clean up Steps/ Start up Steps
	1. go into index.html and change title of site to project name
	2. Optional: Use App.jsx inside of src/components as the main file to create most of the application
	3. Delete this File before the initial commit to Github


