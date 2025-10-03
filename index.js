console.log("pro branch");

async function test(params) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()
    console.log(json)
}

test();