# Audio Player

A simple audio player built with React and Zustand for state management. This application allows users to play, pause, skip, and manage their favorite songs, providing a smooth and enjoyable audio experience. The project is developed using TypeScript for type safety and better maintainability.

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
    git clone https://github.com/yourusername/audio-player.git
    cd audio-player
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

![Screenshot 2024-10-27 135325](https://github.com/user-attachments/assets/9aafefda-c3ff-45bc-a497-d1014ed0dce3)
![Screenshot 2024-10-27 135405](https://github.com/user-attachments/assets/d0eadaf7-7d5f-4f67-b50f-cfc9d19588c0)
![Screenshot 2024-10-27 135429](https://github.com/user-attachments/assets/cd1347a6-1b5a-4128-9c34-46a08ef72ed9)
![Screenshot 2024-10-27 135734](https://github.com/user-attachments/assets/2db95720-316d-4129-ac1d-3c36211505ba)
![Screenshot 2024-10-27 135802](https://github.com/user-attachments/assets/8ae563a1-b7ec-4872-ba7a-f715b3c6fe34)

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to report a bug, please open an issue or submit a pull request.
