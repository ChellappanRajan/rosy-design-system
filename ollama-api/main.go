package main

import (
	"fmt"
	"net/http"
	"time"
)

func streamHandler(w http.ResponseWriter, r *http.Request) {

	// Set CORS headers to allow requests from your Angular app
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:4200")
	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// Set the necessary headers to keep the connection open and stream data
	w.Header().Set("Content-Type", "text/event-stream") // For streaming
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")

	// Flusher allows us to flush data to the client immediately
	flusher, ok := w.(http.Flusher)
	if !ok {
		http.Error(w, "Streaming unsupported", http.StatusInternalServerError)
		return
	}

	// Stream data periodically
	for i := 0; i < 100; i++ {
		fmt.Fprintf(w, "data: Message %d at %s\n\n", i+1, time.Now().Format(time.RFC3339))
		flusher.Flush()             // Send the data immediately
		time.Sleep(1 * time.Second) // Simulate delay between messages
	}

	fmt.Fprintf(w, "data: Stream Ended\n\n")
	flusher.Flush()
}

func main() {
	http.HandleFunc("/stream", streamHandler)

	fmt.Println("Server started at :8080")
	http.ListenAndServe(":8080", nil)
}
