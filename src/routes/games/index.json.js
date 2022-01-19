export async function get() {
    const games = [
        { id: 1, title: "title", body: "body"},
        { id: 2, title: "title 2", body: "body 2"},
        { id: 3, title: "title 3 ", body: "body 3"},
        { id: 4, title: "title 4", body: "body 4"},
        { id: 5, title: "title 5", body: "body 5"}
    ]

    return {
        status: 200,
        body: { games}
    }
}