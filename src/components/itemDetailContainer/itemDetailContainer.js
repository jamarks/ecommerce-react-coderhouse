import React, { useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail'

function getItem(searchId) {
    //console.log('producto' + id);
    // eventualmente se reemplazara por firebase con fetch o algo asi imagino
    const var1 = {id:1,name:'Remera Blanca XS',price:19.90,stock:30,img:'https://www.chloe.com/product_image/12452284ue/f/w1370.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu mauris, condimentum vitae pharetra id, dignissim at nisi. Maecenas auctor tortor mattis urna bibendum suscipit. Mauris hendrerit ac augue iaculis viverra. Vivamus felis sem, mollis eu dolor eu, ullamcorper faucibus ligula. Duis aliquet, lorem quis tempus vestibulum, ante magna ultrices purus, quis suscipit metus sem vitae enim. Suspendisse lacus tellus, condimentum eu libero vitae, pretium dapibus quam. Curabitur tincidunt aliquam massa ut malesuada. Praesent pharetra enim venenatis lacus feugiat, mattis gravida arcu interdum. Nullam in vestibulum lectus, ac consectetur elit. Ut sit amet sapien quam. Aenean luctus massa tristique, gravida purus vitae, viverra mauris. Ut volutpat, dui eu tincidunt condimentum, ex erat sagittis enim, non semper magna dui quis dolor. Duis sodales lorem ut varius fringilla. Nulla efficitur turpis lacinia molestie condimentum.'};
    const var2 = {id:2,name:'Remera Blanca S',price:21.90,stock:40,img:'https://www.chloe.com/product_image/14075341de/f/w1370.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu mauris, condimentum vitae pharetra id, dignissim at nisi. Maecenas auctor tortor mattis urna bibendum suscipit. Mauris hendrerit ac augue iaculis viverra. Vivamus felis sem, mollis eu dolor eu, ullamcorper faucibus ligula. Duis aliquet, lorem quis tempus vestibulum, ante magna ultrices purus, quis suscipit metus sem vitae enim. Suspendisse lacus tellus, condimentum eu libero vitae, pretium dapibus quam. Curabitur tincidunt aliquam massa ut malesuada. Praesent pharetra enim venenatis lacus feugiat, mattis gravida arcu interdum. Nullam in vestibulum lectus, ac consectetur elit. Ut sit amet sapien quam. Aenean luctus massa tristique, gravida purus vitae, viverra mauris. Ut volutpat, dui eu tincidunt condimentum, ex erat sagittis enim, non semper magna dui quis dolor. Duis sodales lorem ut varius fringilla. Nulla efficitur turpis lacinia molestie condimentum.'};
    const var3 = {id:3,name:'Remera Blanca M',price:22.90,stock:100,img:'https://www.chloe.com/product_image/14075341de/f/w1370.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu mauris, condimentum vitae pharetra id, dignissim at nisi. Maecenas auctor tortor mattis urna bibendum suscipit. Mauris hendrerit ac augue iaculis viverra. Vivamus felis sem, mollis eu dolor eu, ullamcorper faucibus ligula. Duis aliquet, lorem quis tempus vestibulum, ante magna ultrices purus, quis suscipit metus sem vitae enim. Suspendisse lacus tellus, condimentum eu libero vitae, pretium dapibus quam. Curabitur tincidunt aliquam massa ut malesuada. Praesent pharetra enim venenatis lacus feugiat, mattis gravida arcu interdum. Nullam in vestibulum lectus, ac consectetur elit. Ut sit amet sapien quam. Aenean luctus massa tristique, gravida purus vitae, viverra mauris. Ut volutpat, dui eu tincidunt condimentum, ex erat sagittis enim, non semper magna dui quis dolor. Duis sodales lorem ut varius fringilla. Nulla efficitur turpis lacinia molestie condimentum.'};
    const var4 = {id:4,name:'Remera Blanca L',price:23.90,stock:200,img:'https://www.chloe.com/product_image/14075349ko/f/w1370.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu mauris, condimentum vitae pharetra id, dignissim at nisi. Maecenas auctor tortor mattis urna bibendum suscipit. Mauris hendrerit ac augue iaculis viverra. Vivamus felis sem, mollis eu dolor eu, ullamcorper faucibus ligula. Duis aliquet, lorem quis tempus vestibulum, ante magna ultrices purus, quis suscipit metus sem vitae enim. Suspendisse lacus tellus, condimentum eu libero vitae, pretium dapibus quam. Curabitur tincidunt aliquam massa ut malesuada. Praesent pharetra enim venenatis lacus feugiat, mattis gravida arcu interdum. Nullam in vestibulum lectus, ac consectetur elit. Ut sit amet sapien quam. Aenean luctus massa tristique, gravida purus vitae, viverra mauris. Ut volutpat, dui eu tincidunt condimentum, ex erat sagittis enim, non semper magna dui quis dolor. Duis sodales lorem ut varius fringilla. Nulla efficitur turpis lacinia molestie condimentum.'};
    const var5 = {id:5,name:'Remera Blanca XL',price:25.90,stock:25,img:'https://www.chloe.com/product_image/14069848vm/f/w1370.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu mauris, condimentum vitae pharetra id, dignissim at nisi. Maecenas auctor tortor mattis urna bibendum suscipit. Mauris hendrerit ac augue iaculis viverra. Vivamus felis sem, mollis eu dolor eu, ullamcorper faucibus ligula. Duis aliquet, lorem quis tempus vestibulum, ante magna ultrices purus, quis suscipit metus sem vitae enim. Suspendisse lacus tellus, condimentum eu libero vitae, pretium dapibus quam. Curabitur tincidunt aliquam massa ut malesuada. Praesent pharetra enim venenatis lacus feugiat, mattis gravida arcu interdum. Nullam in vestibulum lectus, ac consectetur elit. Ut sit amet sapien quam. Aenean luctus massa tristique, gravida purus vitae, viverra mauris. Ut volutpat, dui eu tincidunt condimentum, ex erat sagittis enim, non semper magna dui quis dolor. Duis sodales lorem ut varius fringilla. Nulla efficitur turpis lacinia molestie condimentum.'};
    const var6 = {id:6,name:'Remera Blanca XXL',price:29.90,stock:5,img:'https://www.chloe.com/product_image/14075341de/f/w1370.jpg',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu mauris, condimentum vitae pharetra id, dignissim at nisi. Maecenas auctor tortor mattis urna bibendum suscipit. Mauris hendrerit ac augue iaculis viverra. Vivamus felis sem, mollis eu dolor eu, ullamcorper faucibus ligula. Duis aliquet, lorem quis tempus vestibulum, ante magna ultrices purus, quis suscipit metus sem vitae enim. Suspendisse lacus tellus, condimentum eu libero vitae, pretium dapibus quam. Curabitur tincidunt aliquam massa ut malesuada. Praesent pharetra enim venenatis lacus feugiat, mattis gravida arcu interdum. Nullam in vestibulum lectus, ac consectetur elit. Ut sit amet sapien quam. Aenean luctus massa tristique, gravida purus vitae, viverra mauris. Ut volutpat, dui eu tincidunt condimentum, ex erat sagittis enim, non semper magna dui quis dolor. Duis sodales lorem ut varius fringilla. Nulla efficitur turpis lacinia molestie condimentum.'};
    
    const productos = [var1,var2,var3,var4,var5,var6];
    //console.log('search id es' + searchId);
    const productoSeleccionado = productos.find(i => i.id == searchId);
    
    

    
    return new Promise((res,rej)=>{
        setTimeout(() => res(productoSeleccionado), 100);
    });
    // eventualmente se reemplazara por firebase

}

function ItemDetailContainer() {

    const { id } = useParams();
    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(true);

   //console.log(id);
    useEffect(() => {
        getItem(id).then(res => {
            //console.log('Loading : ' + loading);
            setProduct(res); 
            //console.log(res);
            setLoading(false); 
            //console.log('Loading : ' + loading);
        });
      }, [id]);
    
    
    
    return(
        
        <div className='container' style={{paddingTop:20}}>
           {loading?(
               <div className='row justify-content-center'>
               
                    <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>  
               </div>
           ):(
                    <>
                        <Link to ={'/items'}> Volver al listado </Link>
                        <ItemDetail product={product}></ItemDetail>
                    </>
                
           )} 
        </div>
        
    )
}
export default ItemDetailContainer;