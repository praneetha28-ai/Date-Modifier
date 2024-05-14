<?php 
if(isset($_POST['option']))
{
    switch($_POST['option'])
    {
        case 'nme':
            $result = execute_nme();
            echo $result ;
            break;
        case 'nwe':
            $result = execute_nwe();
            echo $result;
            break;
        case 'nNM':
            $result = execute_nNM();
            echo $result;
            break;
        default:
            echo"No option";
            break;
    }
}
function execute_nwe()
{
    $inputDate = $_POST['date'];
    $datetime = strtotime($inputDate);
    $nextWeekend = strtotime('next friday, 11:59am', $datetime);
    return  date('d-m-Y', $nextWeekend);
}
function execute_nme()
{
    $inputDate = $_POST['date'];
    $currentMonth = strtotime('M',$inputDate);
    $currentMonth+=1 ;
    $currentYear = strtotime('Y',$inputDate);
    $nextMonth = strtotime('{$currentYear}-{$currentMonth}-01');
    $nextMonthWeekends = strtotime('last fri of this month',$nextMonth);
    return date('d-m-Y', $nextMonthWeekends);
}
function execute_nNM()
{
    return $_POST['date'];
}
?>