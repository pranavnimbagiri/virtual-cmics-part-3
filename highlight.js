AFRAME.registerComponent("high-light",{
    schema:{
        selecteditemid:{
            default:"",
            type:"String"
        }
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handlePlacesListState:function(){
        const id=this.el.getAttribute("id")
        const placeid=["superman","hulk","ironman","aquaman"]
        if (placeid.includes(id)){
            const placescontainer=document.querySelector("#places-container")
            placescontainer.setAttribute("high-light",{
                selecteditemid:id
            })
            this.el.setAttribute("material",{color:"#d76b30",opacity:1})
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selecteditemid}=this.data
            if (selecteditemid) {
                const el=document.querySelector(`#${selecteditemid}`)
                const id=el.getAttribute("id")
                if (id==selecteditemid){
                    el.setAttribute("material",{
                        color:"#0077cc",
                        opacity:1
                    })
                }
            }
        })
    }
})