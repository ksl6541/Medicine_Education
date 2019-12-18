                var amt = 20;
                var gap = 280;

                var cnt = 0;
                var init_amt = amt;

                function scroll_right(){
                    document.getElementById('img_list').scrollLeft += amt;
                    if(cnt >= gap){
                        cnt = 0;
                        var adj = document.getElementById('img_list').scrollLeft % gap;
                        document.getElementById('img_list').scrollLeft -= adj;
                        amt = init_amt;
                    }
                    else{
                        amt = Math.ceil(amt / 1.2);
                        setTimeout(scroll_right, 10);
                    }
                    cnt = cnt + amt;
                }

                function scroll_left(){
                    document.getElementById('img_list').scrollLeft -= amt;
                    if(cnt >= gap){
                        cnt = 0;
                        var adj = document.getElementById('img_list').scrollLeft % gap;
                        if(adj > 0) adj = gap - adj
                        document.getElementById('img_list').scrollLeft += adj;
                        amt = init_amt;
                    }
                    else{
                        amt = Math.ceil(amt / 1.2);
                        setTimeout(scroll_left, 10);
                    }
                    cnt = cnt + amt;
                }