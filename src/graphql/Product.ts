import {extendType, floatArg, nonNull, objectType, stringArg} from "nexus";
import {Product} from "../entities/Product";


export const ProductType = objectType({
    name: "Product",
    definition(t) {
        t.nonNull.int("id")
        t.nonNull.string("name")
        t.nonNull.float("price")
    }
});

/*let products: NexusGenObjects["Product"][] = [
    {
        id: 1,
        name: "Product 1",
        price: 15.99,
    },
    {
        id: 2,
        name: "Product 2",
        price: 10.99
    },
]*/

export const ProductsQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("products", {
            type: "Product",
            resolve(_parent, _args, _context, _info) : Promise<Product[]>{
                return Product.find()
            }
        })
    }
})

export const CreateProductMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createProduct", {
            type: "Product",
            args: {
                name: nonNull(stringArg()),
                price: nonNull(floatArg())
            },
            resolve(_parent, _args, _context, _info): Promise<Product> {
                const {name, price} = _args;
                return Product.create({name, price}).save()
            }
        })
    }
})