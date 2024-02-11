import AllProducts from "@/components/product/AllProducts";
import FashionPage from "@/components/product/FashionPage";
import TechPage from "@/components/product/TechPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductsPage = async () => {
  return (
    <div className="w-full flex items-center justify-center py-16">
      <Tabs
        defaultValue="all"
        className="w-full flex flex-col items-center justify-start"
      >
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="fashion">Fashion</TabsTrigger>
          <TabsTrigger value="tech">Tech</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="">
          <AllProducts />
        </TabsContent>
        <TabsContent value="fashion">
          <FashionPage />
        </TabsContent>
        <TabsContent value="tech">
          <TechPage />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductsPage;
