declare module "*.module.scss" {
  const className: { [key: string]: string };
  export default className;
}

declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
