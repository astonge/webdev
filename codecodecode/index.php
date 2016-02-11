<?php get_header(); ?>


  <div class="row">
    <div class="large-2 medium-2 columns">
      <?php get_sidebar(); ?>
    </div>
    <div id="content" class="large-10 medium-10 columns">
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div id="postdate">
           <h3 class="post_header"><?php the_title();?><br/>
           <small>
             posted on {<?php the_time('m/d/y');?>}; (<a href="<?php the_permalink();?>">permalink</a>);</small></p>
	         <!-- <h4>[<?php the_time('m/d/y'); ?>] | <a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h4> -->
        </div>
        <div id="posttext">
          <p><?php the_content(__('(more...)')); ?></p>
      </div>
      <hr><?php endwhile; else: ?>
        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p><?php endif; ?>
    </div>
  </div>

<?php get_footer(); ?>
