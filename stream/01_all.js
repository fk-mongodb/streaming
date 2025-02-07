let source1 = {
    $source: {
        connectionName: "DEV"
    }
}

let match1 = {
    $match: {
        "ns.db": {
            "$eq": "coba"
        },
        "ns.coll": {
            "$eq": "product"
        }
    }
}

let merge1 = {
    $merge: {
        into: {
            connectionName: "DEV",
            db: "streaming",
            coll: "all"
        }
    }
}

sp.createStreamProcessor("stream_coba.product_all", [source1, match1, merge1])