import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.scss']
})
export class ParentchildComponent implements OnInit {
  
  
 // title = 'CheckList With Parents and Child Structure';
  data: any;
  x: boolean

  public selectedcourse=[];

 
  constructor() {
    this.data = {};
    this.data.isAllSelected = false;
    this.data.isAllCollapsed = true;
    this.x = false
    
    //List object having hierarchy of parents and its children
    this.data.ParentChildchecklist = [
      {
        id: 1,value: 'Course 1',isSelected: false,isClosed:true, isDetermine: false,
        childList: [
          {
            id: 1,parent_id: 1,value: 'Subcourse 1',isSelected: false
          },
          {
            id: 2,parent_id: 1,value: 'Subcourse 2',isSelected: false
          }
        ]
      },
      {
        id: 2,value: 'Course 2',isSelected: false,isClosed:true, isDetermine: false,childList: [
          {
            id: 1,parent_id: 1,value: 'Subcourse 1',isSelected: false
          },
          {
            id: 2,parent_id: 1,value: 'Subcourse 2',isSelected: false
          }
        ]
      },
      {
        id: 3,value: 'Course 3',isSelected: false,isClosed:true, isDetermine: false,
        childList: [
          {
            id: 1,parent_id: 1,value: 'Subcourse 1',isSelected: false
          },
          {
            id: 2,parent_id: 1,value: 'Subcourse 2',isSelected: false
          }
        ]
      }
    ];
  }
   
  //Click event on parent checkbox  
   parentCheck(parentObj) {
  
    
    for (var i = 0; i < parentObj.childList.length; i++) {
      parentObj.childList[i].isSelected = parentObj.isSelected;
      

    }

  }
 
  //Click event on child checkbox  
  childCheck(parentObj, childObjList) {
    //parentObj.isSelected = childObjList.every(function (itemChild: any) {
      
      //return itemChild.isSelected == true;
      
    //})

    var isSelected = true
    for (var i = 0; i < childObjList.length ;i++) {
      if (!childObjList[i].isSelected) {
          isSelected = false
          break
      }
      else if(childObjList[i].isSelected){
        parentObj.isSelected = true
        this.x=true
        console.log(childObjList[i].isSelected)
      }
        
     }
     // when some of child is selected
     parentObj.isDetermine =  !parentObj.isDetermine
     //if no child is selected
     for (var i = 0; i < childObjList.length ;i++) {
      if (!childObjList[i].isSelected) {
        parentObj.isSelected = false
        
      }
     }
  }
 
  //Click event on master select
  selectUnselectAll(obj) {
    obj.isAllSelected = !obj.isAllSelected;
    for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
       obj.ParentChildchecklist[i].isSelected = obj.isAllSelected;
     
      for (var j = 0; j < obj.ParentChildchecklist[i].childList.length; j++) {
        obj.ParentChildchecklist[i].childList[j].isSelected = obj.isAllSelected;
       
      }
    }
  }
   //Expand/Collapse event on each parent
   expandCollapse(obj){
    obj.isClosed = !obj.isClosed;
  }
 
  //Master expand/ collapse event
  expandCollapseAll(obj){
    obj.isAllCollapsed = !obj.isAllCollapsed;
    for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
      obj.ParentChildchecklist[i].isClosed = obj.isAllCollapsed;
    }
    
  }
 
  //Just to show updated JSON object on view
  stringify(obj) {
    return JSON.stringify(obj);
  }

  ngOnInit() {

  }
  processForm() {
   
    for (var i = 0; i < this.data.ParentChildchecklist.length; i++) {
      for (var j = 0; j < this.data.ParentChildchecklist[i].childList.length; j++) {
        if(this.data.ParentChildchecklist[i].childList[j].isSelected ==true) {
          const allInfo = `Selected courses are : ${this.data.ParentChildchecklist[i].value},${this.data.ParentChildchecklist[i].childList[j].value}`;
          alert(allInfo); 
        }
       
      }
    }

   
    
  }
 
}
