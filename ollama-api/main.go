package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type Request struct {
	Model  string `json:"model"`
	Prompt string `json:"prompt"`
}

//Implementing Server-Sent Events
// func streamHandler(w http.ResponseWriter, r *http.Request) {

// 	// Set CORS headers to allow requests from your Angular app
// 	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:4200")
// 	w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
// 	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

// 	// Set the necessary headers to keep the connection open and stream data
// 	w.Header().Set("Content-Type", "text/event-stream") // For streaming
// 	w.Header().Set("Cache-Control", "no-cache")
// 	w.Header().Set("Connection", "keep-alive")

// 	// Flusher allows us to flush data to the client immediately
// 	flusher, ok := w.(http.Flusher)
// 	if !ok {
// 		http.Error(w, "Streaming unsupported", http.StatusInternalServerError)
// 		return
// 	}

// 	// Stream data periodically
// 	for i := 0; i < 100; i++ {
// 		fmt.Fprintf(w, "data: Message %d at %s\n\n", i+1, time.Now().Format(time.RFC3339))
// 		flusher.Flush()                    // Send the data immediately
// 		time.Sleep(500 * time.Millisecond) // Simulate delay between messages
// 	}

// 	fmt.Fprintf(w, "data: Stream Ended\n\n")
// 	flusher.Flush()
// }

func conversation(w http.ResponseWriter, r *http.Request) {

	// Set CORS headers to allow requests from your Angular app
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:4200")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	//prefligh request made by browser to ensure cross domain allowed for particular orgin(CORS)
	// Handle preflight requests (OPTIONS)
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Set the necessary headers to keep the connection open and stream data
	w.Header().Set("Content-Type", "text/event-stream") // For streaming
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")

	/**
	http.Flusher - used to send buffered data immediately without waiting for the full response to complete
	*/

	// Check if the ResponseWriter supports flushing
	flusher, ok := w.(http.Flusher)
	if !ok {
		http.Error(w, "Streaming unsupported", http.StatusInternalServerError)
		return
	}

	// fmt.Fprintf(w, "data: Message %d at %s\n\n", 1, time.Now().Format(time.RFC3339))
	flusher.Flush()                    // Send the data immediately
	time.Sleep(500 * time.Millisecond) // Simulate delay between messages

	var req Request

	//In go when pass argument it is passed by value which means if we dont pass pointer it will
	//create new copy it will not modify original req variable
	err := json.NewDecoder(r.Body).Decode(&req)

	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	fmt.Fprintf(w, "Model: %s, Prompt: %s\n", gen.Model, gen.Prompt)

}

func main() {
	// http.HandleFunc("/stream", streamHandler)
	http.HandleFunc("/api/conversation", conversation)

	fmt.Println("Server started at :8080")
	http.ListenAndServe(":8080", nil)
}
