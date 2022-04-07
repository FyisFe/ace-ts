const req = { url: "https://example.com", method: "GET" };

function handleRequest(url: string, methods: "GET" | "POST") {
    console.log(url, methods);
}

// handleRequest(req.url, req.method); // error

handleRequest(req.url, req.method as "GET");

// Or
// req = { url: "https://example.com", method: "GET" as "GET"};

// Or
// const t = { url: "https://example.com", method: "GET"} as const;
// handleRequest(t.url, t.method);
