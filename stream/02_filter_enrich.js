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
        },
        "operationType": "insert"
    }
}

let filter1 = {
    $match: {
        "fullDocument.ownerId": {
            "$gt": 10
        }
    }
}

let set1 = {
    $set: {
        "fullDocument.coOwnerId": "zzz"
    }
}

let merge1 = {
    $merge: {
        into: {
            connectionName: "DEV",
            db: "streaming",
            coll: "filtered_enriched"
        }
    }
}

sp.createStreamProcessor("stream_coba.product_filter_enrich", [source1, match1, filter1, set1, merge1])