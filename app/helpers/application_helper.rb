module ApplicationHelper
    def get_bootstrap_pageitem_class(is_first_or_last)
        if is_first_or_last
            "page-item disable"
        else
            "page-item"
        end
    end
end
