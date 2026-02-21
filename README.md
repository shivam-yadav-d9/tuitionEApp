
step 1:  Clone the Project
git clone https://github.com/shivam-yadav-d9/tuitionEApp.git
cd tuitionEApp


Step 2:  Install Dependencies
npm install


step 3:  Run the App
npx expo start
Then scan the QR with Expo Go or run on emulator from Expo UI.


step 4: Folder Structure

TUITIONEAPP/
│
├── app/                    # Expo Router screens & navigation
│   ├── (tabs)/             # Tab navigation screens
│   ├── constants/          # App constants
│   │   └── colors.ts
│   ├── context/            # Global context providers
│   │   └── AuthContext.js
│   ├── hooks/              # Custom hooks
│   │   └── useStudents.ts
│   ├── screens/            # Additional screens
│   ├── _layout.jsx         # Root layout
│   └── index.jsx           # Entry screen
│
├── assets/                 # Images & fonts
├── node_modules/
├── app.json                # Expo config
├── package.json
├── tsconfig.json
└── README.md

