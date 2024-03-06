import styles from "./map.module.css";

export default function Map(){
    return(
    <iframe className={styles.mapcontainer}
          id="gmap_canvas"
          src={"https://www.google.com/maps/place/610+Dixie+Ave,+Madison,+GA+30650,+EUA/@33.5902002,-83.4781964,17z/data=!3m1!4b1!4m5!3m4!1s0x88f6871abfd3f4a5:0x86921127171b52d6!8m2!3d33.5901958!4d-83.4756215?entry=ttu"}
          frameborder="0" 
          scrolling="no"
          marginheight="0"
          marginwidth="0">
          </iframe>
          )
}