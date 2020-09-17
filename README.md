# React Sandbox for ISCG7420 Semester 2 2020

## Running the React App:

```shell
git clone https://github.com/kris-classes/react-sandbox
cd react-sandbox
npm install
npm start  # Runs the server on http://localhost:3000
```

## Running the Python FastAPI backend:

```shell
python -m venv venv  # Create a virtual environment
venv\Scripts\activate  # Activate the virtual environment on Windows
# or source venv/bin/activate on Linux/MacOS
pip install fastapi uvicorn
uvicorn main:app --reload  # Runs the server on http://localhost:8000
```
