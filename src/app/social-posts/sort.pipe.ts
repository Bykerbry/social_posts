import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from './post.interface';

@Pipe({
    name: 'sortByVotes',
    pure: false
})

export class SortPipe implements PipeTransform {
    transform(allPosts: IPost[]): any {
        if(allPosts.length <= 1) {
            return allPosts;
        }
        return allPosts.sort((postA: IPost, postB: IPost) => postB.upVotes - postA.upVotes);
    }
}