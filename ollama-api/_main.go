// package main

// import (
// 	"bytes"
// 	"encoding/json"
// 	"fmt"
// 	"net/http"
// 	"os"
// 	"time"
// )

// type Request struct {
// 	Model    string    `json:"model"`
// 	Messages []Message `json:"messages"`
// 	Stream   bool      `json:"stream"`
// }

// type Message struct {
// 	Role    string `json:"role"`
// 	Content string `json:"content"`
// }

// type Response struct {
// 	Model              string    `json:"model"`
// 	CreatedAt          time.Time `json:"created_at"`
// 	Message            Message   `json:"message"`
// 	Done               bool      `json:"done"`
// 	TotalDuration      int64     `json:"total_duration"`
// 	LoadDuration       int       `json:"load_duration"`
// 	PromptEvalCount    int       `json:"prompt_eval_count"`
// 	PromptEvalDuration int       `json:"prompt_eval_duration"`
// 	EvalCount          int       `json:"eval_count"`
// 	EvalDuration       int64     `json:"eval_duration"`
// }

// const defaultOllamaURL = "http://localhost:11434/api/chat"

// func main() {
// 	start := time.Now()
// 	msg := Message{
// 		Role:    "user",
// 		Content: "Why is the sky blue?",
// 	}
// 	req := Request{
// 		Model:    "llama3.2",
// 		Stream:   false,
// 		Messages: []Message{msg},
// 	}
// 	resp, err := talkToOllama(defaultOllamaURL, req)
// 	if err != nil {
// 		fmt.Println(err)
// 		os.Exit(1)
// 	}
// 	fmt.Println(resp.Message.Content)
// 	fmt.Printf("Completed in %v", time.Since(start))
// }

// func talkToOllama(url string, ollamaReq Request) (*Response, error) {
// 	js, err := json.Marshal(&ollamaReq) //Serialize struct into JSON
// 	if err != nil {
// 		return nil, err
// 	}
// 	client := http.Client{} //http object to make http call
// 	httpReq, err := http.NewRequest(http.MethodPost, url, bytes.NewReader(js))
// 	if err != nil {
// 		return nil, err
// 	}
// 	httpResp, err := client.Do(httpReq)
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer httpResp.Body.Close() //close body if function return early for close previous open body
// 	ollamaResp := Response{}
// 	err = json.NewDecoder(httpResp.Body).Decode(&ollamaResp)
// 	return &ollamaResp, err
// }
