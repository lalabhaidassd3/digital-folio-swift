import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Product } from "@/data/products";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import product5 from "@/assets/product5.jpg";
import product6 from "@/assets/product6.jpg";

const imageMap: Record<string, string> = {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
};

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div onClick={() => navigate(`/product/${product.id}`)}>
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={imageMap[product.image]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
              {product.category}
            </Badge>
          </div>
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">${product.price}</span>
            </div>
          </CardContent>
        </div>
        <CardFooter className="pt-0">
          <Button
            className="w-full"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
