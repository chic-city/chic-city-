import React from 'react'

const suits = () => {
  return (
    <div>
        <>
  <header className="header_area">
    <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
      {/* Classy Menu */}
      <nav className="classy-navbar" id="essenceNav">
        {/* Logo */}
        <a className="nav-brand" href="index.html">
          <img src="img/core-img/logo.png" alt="" />
        </a>
        {/* Navbar Toggler */}
        <div className="classy-navbar-toggler">
          <span className="navbarToggler">
            <span />
            <span />
            <span />
          </span>
        </div>
        {/* Menu */}
        <div className="classy-menu">
          {/* close btn */}
          <div className="classycloseIcon">
            <div className="cross-wrap">
              <span className="top" />
              <span className="bottom" />
            </div>
          </div>
          {/* Nav Start */}
          <div className="classynav">
            <ul>
              <li>
                <a href="#">Shop</a>
                <div className="megamenu">
                  <ul className="single-mega cn-col-4">
                    <li className="title">Women's Collection</li>
                    <li>
                      <a href="shop.html">Dresses</a>
                    </li>
                    <li>
                      <a href="shop.html">Blouses &amp; Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">T-shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Rompers</a>
                    </li>
                    <li>
                      <a href="shop.html">Bras &amp; Panties</a>
                    </li>
                  </ul>
                  <ul className="single-mega cn-col-4">
                    <li className="title">Men's Collection</li>
                    <li>
                      <a href="shop.html">T-Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Polo</a>
                    </li>
                    <li>
                      <a href="shop.html">Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Jackets</a>
                    </li>
                    <li>
                      <a href="shop.html">Trench</a>
                    </li>
                  </ul>
                  <ul className="single-mega cn-col-4">
                    <li className="title">Kid's Collection</li>
                    <li>
                      <a href="shop.html">Dresses</a>
                    </li>
                    <li>
                      <a href="shop.html">Shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">T-shirts</a>
                    </li>
                    <li>
                      <a href="shop.html">Jackets</a>
                    </li>
                    <li>
                      <a href="shop.html">Trench</a>
                    </li>
                  </ul>
                  <div className="single-mega cn-col-4">
                    <img src="img/bg-img/bg-6.jpg" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="dropdown">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="single-product-details.html">Product Details</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="single-blog.html">Single Blog</a>
                  </li>
                  <li>
                    <a href="regular-page.html">Regular Page</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* Nav End */}
        </div>
      </nav>
      {/* Header Meta Data */}
      <div className="header-meta d-flex clearfix justify-content-end">
        {/* Search Area */}
        <div className="search-area">
          <form action="#" method="post">
            <input
              type="search"
              name="search"
              id="headerSearch"
              placeholder="Type for search"
            />
            <button type="submit">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
        </div>
        {/* Favourite Area */}
        <div className="favourite-area">
          <a href="#">
            <img src="img/core-img/heart.svg" alt="" />
          </a>
        </div>
        {/* User Login Info */}
        <div className="user-login-info">
          <a href="#">
            <img src="img/core-img/user.svg" alt="" />
          </a>
        </div>
        {/* Cart Area */}
        <div className="cart-area">
          <a href="#" id="essenceCartBtn">
            <img src="img/core-img/bag.svg" alt="" /> <span>3</span>
          </a>
        </div>
      </div>
    </div>
  </header>
  {/* ##### Header Area End ##### */}
  {/* ##### Right Side Cart Area ##### */}
  <div className="cart-bg-overlay" />
  <div className="right-side-cart-area">
    {/* Cart Button */}
    <div className="cart-button">
      <a href="#" id="rightSideCart">
        <img src="img/core-img/bag.svg" alt="" /> <span>3</span>
      </a>
    </div>
    <div className="cart-content d-flex">
      {/* Cart List Area */}
      <div className="cart-list">
        {/* Single Cart Item */}
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img
              src="img/product-img/product-1.jpg"
              className="cart-thumb"
              alt=""
            />
            {/* Cart Item Desc */}
            <div className="cart-item-desc">
              <span className="product-remove">
                <i className="fa fa-close" aria-hidden="true" />
              </span>
              <span className="badge">Mango</span>
              <h6>Button Through Strap Mini Dress</h6>
              <p className="size">Size: S</p>
              <p className="color">Color: Red</p>
              <p className="price">$45.00</p>
            </div>
          </a>
        </div>
        {/* Single Cart Item */}
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img
              src="img/product-img/product-2.jpg"
              className="cart-thumb"
              alt=""
            />
            {/* Cart Item Desc */}
            <div className="cart-item-desc">
              <span className="product-remove">
                <i className="fa fa-close" aria-hidden="true" />
              </span>
              <span className="badge">Mango</span>
              <h6>Button Through Strap Mini Dress</h6>
              <p className="size">Size: S</p>
              <p className="color">Color: Red</p>
              <p className="price">$45.00</p>
            </div>
          </a>
        </div>
        {/* Single Cart Item */}
        <div className="single-cart-item">
          <a href="#" className="product-image">
            <img
              src="img/product-img/product-3.jpg"
              className="cart-thumb"
              alt=""
            />
            {/* Cart Item Desc */}
            <div className="cart-item-desc">
              <span className="product-remove">
                <i className="fa fa-close" aria-hidden="true" />
              </span>
              <span className="badge">Mango</span>
              <h6>Button Through Strap Mini Dress</h6>
              <p className="size">Size: S</p>
              <p className="color">Color: Red</p>
              <p className="price">$45.00</p>
            </div>
          </a>
        </div>
      </div>
      {/* Cart Summary */}
      <div className="cart-amount-summary">
        <h2>Summary</h2>
        <ul className="summary-table">
          <li>
            <span>subtotal:</span> <span>$274.00</span>
          </li>
          <li>
            <span>delivery:</span> <span>Free</span>
          </li>
          <li>
            <span>discount:</span> <span>-15%</span>
          </li>
          <li>
            <span>total:</span> <span>$232.00</span>
          </li>
        </ul>
        <div className="checkout-btn mt-100">
          <a href="checkout.html" className="btn essence-btn">
            check out
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Right Side Cart End ##### */}
  {/* ##### Breadcumb Area Start ##### */}
  <div
    className="breadcumb_area bg-img"
    style={{ backgroundImage: "url(img/bg-img/breadcumb.jpg)" }}
  >
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">
          <div className="page-title text-center">
            <h2>dresses</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ##### Breadcumb Area End ##### */}
  {/* ##### Shop Grid Area Start ##### */}
  <section className="shop_grid_area section-padding-80">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <div className="shop_sidebar_area">
            {/* ##### Single Widget ##### */}
            <div className="widget catagory mb-50">
              {/* Widget Title */}
              <h6 className="widget-title mb-30">Catagories</h6>
              {/*  Catagories  */}
              <div className="catagories-menu">
                <ul id="menu-content2" className="menu-content collapse show">
                  {/* Single Item */}
                  <li data-toggle="collapse" data-target="#clothing">
                    <a href="#">clothing</a>
                    <ul className="sub-menu collapse show" id="clothing">
                      <li>
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">Bodysuits</a>
                      </li>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Hoodies &amp; Sweats</a>
                      </li>
                      <li>
                        <a href="#">Jackets &amp; Coats</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Pants &amp; Leggings</a>
                      </li>
                      <li>
                        <a href="#">Rompers &amp; Jumpsuits</a>
                      </li>
                      <li>
                        <a href="#">Shirts &amp; Blouses</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Sweaters &amp; Knits</a>
                      </li>
                    </ul>
                  </li>
                  {/* Single Item */}
                  <li
                    data-toggle="collapse"
                    data-target="#shoes"
                    className="collapsed"
                  >
                    <a href="#">shoes</a>
                    <ul className="sub-menu collapse" id="shoes">
                      <li>
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">Bodysuits</a>
                      </li>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Hoodies &amp; Sweats</a>
                      </li>
                      <li>
                        <a href="#">Jackets &amp; Coats</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Pants &amp; Leggings</a>
                      </li>
                      <li>
                        <a href="#">Rompers &amp; Jumpsuits</a>
                      </li>
                      <li>
                        <a href="#">Shirts &amp; Blouses</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Sweaters &amp; Knits</a>
                      </li>
                    </ul>
                  </li>
                  {/* Single Item */}
                  <li
                    data-toggle="collapse"
                    data-target="#accessories"
                    className="collapsed"
                  >
                    <a href="#">accessories</a>
                    <ul className="sub-menu collapse" id="accessories">
                      <li>
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">Bodysuits</a>
                      </li>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Hoodies &amp; Sweats</a>
                      </li>
                      <li>
                        <a href="#">Jackets &amp; Coats</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Pants &amp; Leggings</a>
                      </li>
                      <li>
                        <a href="#">Rompers &amp; Jumpsuits</a>
                      </li>
                      <li>
                        <a href="#">Shirts &amp; Blouses</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Sweaters &amp; Knits</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* ##### Single Widget ##### */}
            <div className="widget price mb-50">
              {/* Widget Title */}
              <h6 className="widget-title mb-30">Filter by</h6>
              {/* Widget Title 2 */}
              <p className="widget-title2 mb-30">Price</p>
              <div className="widget-desc">
                <div className="slider-range">
                  <div
                    data-min={49}
                    data-max={360}
                    data-unit="$"
                    className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    data-value-min={49}
                    data-value-max={360}
                    data-label-result="Range:"
                  >
                    <div className="ui-slider-range ui-widget-header ui-corner-all" />
                    <span
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      tabIndex={0}
                    />
                    <span
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      tabIndex={0}
                    />
                  </div>
                  <div className="range-price">Range: $49.00 - $360.00</div>
                </div>
              </div>
            </div>
            {/* ##### Single Widget ##### */}
            <div className="widget color mb-50">
              {/* Widget Title 2 */}
              <p className="widget-title2 mb-30">Color</p>
              <div className="widget-desc">
                <ul className="d-flex">
                  <li>
                    <a href="#" className="color1" />
                  </li>
                  <li>
                    <a href="#" className="color2" />
                  </li>
                  <li>
                    <a href="#" className="color3" />
                  </li>
                  <li>
                    <a href="#" className="color4" />
                  </li>
                  <li>
                    <a href="#" className="color5" />
                  </li>
                  <li>
                    <a href="#" className="color6" />
                  </li>
                  <li>
                    <a href="#" className="color7" />
                  </li>
                  <li>
                    <a href="#" className="color8" />
                  </li>
                  <li>
                    <a href="#" className="color9" />
                  </li>
                  <li>
                    <a href="#" className="color10" />
                  </li>
                </ul>
              </div>
            </div>
            {/* ##### Single Widget ##### */}
            <div className="widget brands mb-50">
              {/* Widget Title 2 */}
              <p className="widget-title2 mb-30">Brands</p>
              <div className="widget-desc">
                <ul>
                  <li>
                    <a href="#">Asos</a>
                  </li>
                  <li>
                    <a href="#">Mango</a>
                  </li>
                  <li>
                    <a href="#">River Island</a>
                  </li>
                  <li>
                    <a href="#">Topshop</a>
                  </li>
                  <li>
                    <a href="#">Zara</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
          <div className="shop_grid_product_area">
            <div className="row">
              <div className="col-12">
                <div className="product-topbar d-flex align-items-center justify-content-between">
                  {/* Total Products */}
                  <div className="total-products">
                    <p>
                      <span>186</span> products found
                    </p>
                  </div>
                  {/* Sorting */}
                  <div className="product-sorting d-flex">
                    <p>Sort by:</p>
                    <form action="#" method="get">
                      <select name="select" id="sortByselect">
                        <option value="value">Highest Rated</option>
                        <option value="value">Newest</option>
                        <option value="value">Price: $$ - $</option>
                        <option value="value">Price: $ - $$</option>
                      </select>
                      <input type="submit" className="d-none" defaultValue="" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-1.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-2.jpg"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">$75.00</span> $55.00
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-2.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-3.jpg"
                      alt=""
                    />
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">$80.00</p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-3.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-4.jpg"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge new-badge">
                      <span>New</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">$80.00</p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-4.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-5.jpg"
                      alt=""
                    />
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">$80.00</p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-5.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-6.jpg"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge offer-badge">
                      <span>-30%</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">
                      <span className="old-price">$75.00</span> $55.00
                    </p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-6.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-7.jpg"
                      alt=""
                    />
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">$80.00</p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-7.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-8.jpg"
                      alt=""
                    />
                    {/* Product Badge */}
                    <div className="product-badge new-badge">
                      <span>New</span>
                    </div>
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">$80.00</p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-8.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-9.jpg"
                      alt=""
                    />
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">$80.00</p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product-9.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product-1.jpg"
                      alt=""
                    />
                    {/* Favourite */}
                    <div className="product-favourite">
                      <a href="#" className="favme fa fa-heart" />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                      <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">$80.00</p>
                    {/* Hover Content */}
                    <div className="hover-content">
                      {/* Add to Cart */}
                      <div className="add-to-cart-btn">
                        <a href="#" className="btn essence-btn">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <nav aria-label="navigation">
            <ul className="pagination mt-50 mb-70">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa fa-angle-left" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  21
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default suits