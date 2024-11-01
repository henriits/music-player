# Audio Player

A simple audio player built with React and Zustand for state management. This application allows users to play, pause, skip, and manage their favorite songs, providing a smooth and enjoyable audio experience. The project is developed using TypeScript for type safety and better maintainability.

Application is running live on Vercel : https://music-player-topaz-five.vercel.app/

## Features

-   Play, pause, and skip songs
-   Volume control with mute functionality
-   Display current song information (title, artist, album art)
-   Progress bar for tracking song playback
-   Favorites management: add or remove songs from favorites
-   Favorites are stored in local storage for persistence
-   Responsive design for optimal performance on different devices
-   User-friendly interface

## Technologies Used

-   **React**: A JavaScript library for building user interfaces
-   **Zustand**: A small, fast, and scalable bearbones state-management solution
-   **React Icons**: For scalable vector icons
-   **CSS**: For styling and layout
-   **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/henriits/music-player.git
    cd music-player
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173/`.

## Usage

-   Browse through the song list and click on any song to start playback.
-   Use the play/pause button to control playback.
-   Adjust the volume using the volume slider or click the volume icon to mute/unmute.
-   Add songs to your favorites by clicking the favorite button.
-   Your favorites will be saved in local storage, ensuring they persist even after refreshing the page.
-   Navigate through your favorites or the song list using the provided modal buttons.

## Folder Structure

```
/audio-player
|-- /public
     |-- /audio   <-- New music goes in here
          |-- /songs.json   <- Include the data for the new songs in this JSON
|-- /src
    |-- /components
        |-- /AudioPlayer
            |-- AudioPlayer.tsx
            |-- AudioPlayer.css
        |-- /FavoriteButton
            |-- FavoriteButton.tsx
            |-- FavoriteButton.css
        |-- /ModalButtons
            |-- ModalButtons.tsx
            |-- ModalButtons.css
        |-- /VolumeControl
            |-- VolumeControl.tsx
            |-- VolumeControl.css
        |-- /SongList
            |-- SongList.tsx
            |-- SongList.css
        |-- /Favorites
            |-- Favorites.tsx
            |-- Favorites.css
    |-- /hooks
        |-- useFetchSongs.ts
    |-- /store
        |-- store.ts
    |-- /utils
        |-- durationUtils.ts
    |-- App.tsx
    |-- index.tsx
|-- package.json
|-- README.md
```

## Preview Images

![Screenshot 2024-10-27 140316](https://github.com/user-attachments/assets/3db39034-f29e-4751-96d8-e57eb205fd66)
![Screenshot 2024-10-27 135405](https://github.com/user-attachments/assets/502dbb5b-788e-44ac-b39e-885ca7505255)
![Screenshot 2024-10-27 135429](https://github.com/user-attachments/assets/3e05f43e-8f10-426c-a59b-1ed0d0abb54a)
![Screenshot 2024-10-27 135734](https://github.com/user-attachments/assets/7f976f38-2c77-4348-8a82-30984ae0311f)
![Screenshot 2024-10-27 135802](https://github.com/user-attachments/assets/d112efca-e540-4baa-8c15-54bcb302871b)

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to report a bug, please open an issue or submit a pull request.
