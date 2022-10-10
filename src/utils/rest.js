export async function fazPedido(url, method, body) {
    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    if (res.status === 204) return true
    const json = await res.json()
    return json
}

export async function fazPedidoAutorizado(url, method, body) {
    const res = await fetch(url, {
        method: method,
        headers: {
            "authorization": `${localStorage.getItem(token)}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    if (res.status === 204) return true
    const json = await res.json()
    return json
}